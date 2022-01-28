
const myStorage = window.localStorage;


class Game {
  constructor() {
    this.canvas = null;
    this.canvas_x = null
    this.canvas_y = null
    this.ctx = null;
    this.player = null;
    this.projectiles = [];
    this.enemies = [];
    this.gameIsOver = false;
    this.score = 0;
    this.lives = 3;
  }


  start() {
    // Append canvas to the DOM, create a Player and start the Canvas loop
    // Save reference to canvas and Create ctx
    this.canvas = document.querySelector("canvas")
    this.ctx = this.canvas.getContext("2d") 
    this.canvas_x = this.canvas.getBoundingClientRect().left
    this.canvas_y = this.canvas.getBoundingClientRect().top
    

    // Create a new player for the current game
    this.player = new Player (this.canvas, this.ctx)


   //MOVING PLAYER 
    this.handleKeyDown = (event) => {
        if (event.code === "KeyA") return this.player.setDirection("left");
        if (event.code === "KeyD") return this.player.setDirection("right");
        if (event.code === "KeyW") return this.player.setSpeed("up");

      };

     this.handleKeyUp = (event) => {
        if (event.code === "KeyW") return this.player.resetSpeed("stopAcc")
      }; 
    document.body.addEventListener("keydown", this.handleKeyDown);
    document.body.addEventListener("keyup", this.handleKeyUp);
      
  
    // SHOOTING PROJECTILES
    this.canvas.addEventListener("click", (event) =>{
   
        const angle = Math.atan2(event.clientY - this.player.y-this.canvas_y, event.clientX - this.player.x-this.canvas_x)
       
        const speed = {
            x: Math.cos(angle)*6,
            y: Math.sin(angle)*6
        }
    
        this.projectiles.push(new Projectile (
            this.ctx,
            this.player.x,
            this.player.y,
            5,
            `white`,
            speed
        ))
    })

    //CREATING RANDOM ENEMIES OF DIFFERENT SIZES
    setInterval(() =>{
        
        const radius = Math.random() * (30- 5) + 5
        let x 
        let y
        if (Math.random() <0.5){
        x = Math.random() < 0.5 ? 0 -radius : this.canvas.width + radius
        y = Math.random() * this.canvas.height
        }else{
            x = Math.random() * this.canvas.width
            y = Math.random() < 0.5 ? 0 - radius : this.canvas.height + radius
        }

        const color = `hsl(${Math.random()* 360}, 50%, 50%)`
        const angle = Math.atan2(this.canvas.height / 2 - y, this.canvas.width / 2 - x)
        const speed = {
            x: Math.cos(angle)*2,
            y: Math.sin(angle)*2
        }
        this.enemies.push(new Enemy(this.ctx, x, y, radius, color, speed))
       
    }, 900)

    this.startLoop();

   
  }

  removeLives(){
    // remove each live from top of the board
    const parent = document.querySelector('.lives-screen');
    const firstChild = document.querySelectorAll(".live")
    parent.removeChild(firstChild[0])
  }

  removeLivesText(){
      setTimeout(()=>{
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "white"
        this.ctx.fillText("-1 Live", this.player.x +40, this.player.y -40);
      }, 200)

  }



  startLoop() {
    const loop = () => {
       
    //Check if game is over
    if(this.gameIsOver === false){
       
        window.requestAnimationFrame(loop);
        
           //Changing Score in screen
            let scoreID = document.querySelector(".counter")
            scoreID.textContent = this.score

    }else if (this.gameIsOver===true){
        

        buildGameOver()
                //Storing highest score and rendering it in DOM
                const highest = myStorage.getItem("score");
                const result = Math.max(highest, this.score)
                
                myStorage.setItem("score", String(result))
            
                let finalScoreID = document.querySelector(".final-score")
                let highestScoreID = document.querySelector(".high-score")
       
                highestScoreID.textContent = result;
                finalScoreID.textContent = this.score 
  
                
     console.log(result);
    }

    //Clear every frame
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    //CREATE PLAYER
    this.player.update()
    this.player.draw()
   

    //PROJECTILE ANIMATION
    this.projectiles.forEach ((projectile, projectileIndex) =>{
        projectile.update()
        projectile.draw()    

        //Removing projectiles that go out the screen
        if(projectile.x + projectile.radius < 0 ||
            projectile.x - projectile.radius > this.canvas.width ||
            projectile.y + projectile.radius < 0 ||
            projectile.y - projectile.radius > this.canvas.height){
                this.projectiles.splice(projectileIndex, 1)
            }
      
    })

   
    //ENEMIES ANIMATION
    this.enemies.forEach ((enemy, enemyindex) =>{
        enemy.update()
        enemy.draw()
        const dist = Math.hypot(this.player.x - enemy.x, this.player.y - enemy.y)

        //Check collision between enemies and player
        if(dist -enemy.radius - this.player.size < 1){

            //Removing enemies from enemies array
            this.enemies.splice(enemyindex, 1)
            
                this.removeLivesText()
          
            if(this.lives > 1){
                new Audio('./audio/player-hit.mp3').play();
                this.lives -=1
                this.removeLives() 

            } else{
        
                new Audio('./audio/game-over.mp3').play();
                this.gameIsOver = true
  
            }
        
        }

        //Check Collision between enemies and prjectiles
        this.projectiles.forEach((projectile, projectileIndex)=>{
            
            //For each projectile check the distance with enemies
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

            //When projectiles touch enemies
            if(dist - enemy.radius - projectile.radius < 1){
                //If enemies are too big, shrink them instead of killing them
                if(enemy.radius -10 > 10){
                    enemy.radius -= 10
                    
                    this.score +=5

                    
                    setTimeout(()=>{
                    this.projectiles.splice(projectileIndex, 1)
                    },0)
                }else{
                    new Audio('./audio/enemy-death.mp3').play();
                    this.score +=10
              
                    setTimeout(()=>{
                        this.enemies.splice(enemyindex, 1)
                        this.projectiles.splice(projectileIndex, 1)
                     },0)
                }            
            }
        })
    })

    };

    window.requestAnimationFrame(loop);
  }

}

  

