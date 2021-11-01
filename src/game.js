"use strict";
class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.projectiles = [];
    this.player = null;
    this.gameIsOver = false;
    this.score = 0;
  }

  start() {
    // Append canvas to the DOM, create a Player and start the Canvas loop
    // Save reference to canvas and Create ctx
    this.canvas = document.querySelector("canvas")
    this.ctx = canvas.getContext("2d") 
    

    // Create a new player for the current game
    this.player = new Player (this.canvas, 30, "blue")
    this.player.draw()
    
  

    addEventListener(`click`, (event) =>{
        const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
        const speed = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        }

        //Create projectiles upon click
        this.projectiles.push(new Projectile (this.ctx, this.canvas.width / 2, this.canvas.height / 2, 5,`red`, speed))
        console.log(this.projectiles)

    })
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

      this.player.draw()

      this.projectiles.forEach ((projectile) =>{
        projectile.update()
      
    })
    this.ctx.clearRect(0, 0, canvas.width, canvas.height)
    this.player.draw()

    this.projectiles.forEach ((projectile) =>{
    
        projectile.draw()
    })


      window.requestAnimationFrame(loop);
    };

    window.requestAnimationFrame(loop);
  }

  

}
  

