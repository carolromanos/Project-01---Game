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
    this.player = new Player (this.canvas, 30, 30, "blue")
    this.player.draw()

   //MOVING PLAYER
    this.handleKeyDown = (event) => {
        if (event.code === "ArrowLeft") return this.player.setDirection("left");
        if (event.code === "ArrowRight") return this.player.setDirection("right");
        if (event.code === "ArrowUp") return this.player.setDirection("up");
        if (event.code === "ArrowDown") return this.player.setDirection("down");
      };
    document.body.addEventListener("keydown", this.handleKeyDown);
    
    // SHOTING PROJECTILES
    window.addEventListener("click", (event) =>{
      
        const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
        const speed = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }

        //Create projectiles upon click
        this.projectiles.push(new Projectile (this.ctx, this.canvas.width / 2, this.canvas.height / 2, 5,`red`, speed))
        console.log(this.projectiles)

    })
    //CREATING RANDOM ENEMIES

    setInterval(() =>{
        console.log("hola")
        const radius = Math.random() * (30- 5) + 5
        let x 
        let y
        if (Math.random() <0.5){
        x = Math.random() < 0.5 ? 0 -radius : this.canvas.width + radius
        y = Math.random() * this.canvas.height
        }else{
            x = Math.random() * this.canvas.width
            y = Math.random() < 0.5 ? 0 -radius : this.canvas.height + radius
        }

        const color = "orange"
        const angle = Math.atan2(this.canvas.height / 2 - y, this.canvas.width / 2 - x)
        const speed = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }
        this.enemies.push(new Enemy(this.ctx, x, y, radius, color, speed))
        console.log(this.enemies)
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
    //CREATE PLAYER

    this.player.draw()

    //PROJECTILE ANIMATION
    this.projectiles.forEach ((projectile) =>{
        projectile.update()
    })
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.player.draw()
    this.projectiles.forEach ((projectile) =>{
        projectile.draw()
    })

    //ENEMIES ANIMATION
    this.enemies.forEach ((enemies) =>{
        enemies.update()
    })

    this.player.draw()
    this.enemies.forEach ((enemies) =>{
        enemies.draw()
    })

      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  }

}
  

