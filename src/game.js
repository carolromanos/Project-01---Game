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
    
  }

}
  

