"use strict";
class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.player = null;
    this.projectiles = [];
    this.enemies = [];
    this.gameIsOver = false;
    this.score = 0;
  }

  start() {
    // Append canvas to the DOM, create a Player and start the Canvas loop
    // Save reference to canvas and Create ctx
    this.canvas = document.querySelector("canvas")
    this.ctx = canvas.getContext("2d") 
    

    // Create a new player for the current game
    this.player = new Player (this.canvas, this.ctx)
    //this.player.draw()

   //MOVING PLAYER 
    this.handleKeyDown = (event) => {
        if (event.code === "ArrowLeft") return this.player.setDirection("left");
        if (event.code === "ArrowRight") return this.player.setDirection("right");
        if (event.code === "ArrowUp") return this.player.setSpeed("up");

      };

     this.handleKeyUp = (event) => {
        if (event.code === "ArrowUp") return this.player.resetSpeed("stopAcc")
      }; 
    document.body.addEventListener("keydown", this.handleKeyDown);
    document.body.addEventListener("keyup", this.handleKeyUp);
 

    
    // SHOOTING PROJECTILES
    document.body.addEventListener("click", (event) =>{
        const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
        const speed = {
            x: Math.cos(angle)*5,
            y: Math.sin(angle)*5
        }
    
        this.projectiles.push(new Projectile (
            this.ctx,
            this.player.x,
            this.player.y,
            5,
            `red`,
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

        const color = "orange"
        const angle = Math.atan2(this.canvas.height / 2 - y, this.canvas.width / 2 - x)
        const speed = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        this.enemies.push(new Enemy(this.ctx, x, y, radius, color, speed))
       
    }, 2000)


    this.startLoop();

    
  }
/*   animateProjectile(){
    window.requestAnimationFrame(animateProjectile())
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.player.draw()
    this.projectiles.forEach ((projectile) =>{
        projectile.update()
        projectile.draw()
    })
  } */

  startLoop() {
    const loop = () => {
        if(this.gameIsOver === false){
        window.requestAnimationFrame(loop);
        }else if (this.gameIsOver===true){
            buildGameOver()
        }
    //CREATE PLAYER
    this.player.update()
    this.player.draw()

    //PROJECTILE ANIMATION
    this.projectiles.forEach ((projectile) =>{
        projectile.update()
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.player.draw()
  
        
    })
    this.projectiles.forEach ((projectile) =>{
        projectile.draw()        
    })
    //ENEMIES ANIMATION
    this.enemies.forEach ((enemy, enemyindex) =>{
        enemy.update()
        enemy.draw()

        const dist = Math.hypot(this.player.x - enemy.x, this.player.y - enemy.y)

        if(dist -enemy.radius - this.player.size < 1){
            this.gameIsOver = true
        
        }
    //Check Collision between enemies and prjectiles
        this.projectiles.forEach((projectile, projectileIndex)=>{
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)

            if(dist -enemy.radius - projectile.radius < 1){
               setTimeout(()=>{
                this.enemies.splice(enemyindex, 1)
                this.projectiles.splice(projectileIndex, 1)
               })
              
            }
        })
    })

    

      
    };

    window.requestAnimationFrame(loop);
  }

}
  

