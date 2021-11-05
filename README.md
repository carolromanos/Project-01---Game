# Enraged Square

In a 

## How does the game work?

* * *
## MVP
### Technique
HTML5, DOM, **Canvas** and Vanilla **Javascript**

### Game states
* __Start Screen__
  * Title
  * Instructions
  * Start Game button
* __Game Screen__
  * Canvas
* __Game Over Screen__
  * User score
  * High score
  * Play again button

### Game
* Create interface
* Create player
* Move player
  * Press A, W,D keys to move the player around the board.
* Create enemies
  * Each enemy will be created within a SerInterval of 1 second
* Create projectiles
  * An event 
* Check collision
  * If there is a collision with an ingredient => player gains points and new ingredient is shown
  * If there is a collision with a knive => Game Over => Show Game Over Screen
* * *

### User stories


## BACK LOG
### Music
* Add music on and off button to setup
* Add sound effects on and off button to setup

## Data structure
__index.js__
````
createStartScreen(id);
createGameScreen(id);
createGameOverScreen(id);
destroyStartScreen();
destroyGameScreen();
destroyGameOverScreen();
let game = new Game({
    this.rows,
    this.columns,
    ctx: ctx,
    // backgroundimage = 'una imagen del fondo',
    this.ingredients,
    this.knives,
    this.player
  });
game.init();
````
__Game.js__
````
function Game(options){};
Game.drawBoard();
Game.drawPlayer();
Game.generateIngredients();
Game.generateKnives();
Game.gameOver();
Game.init();
Game.startTimer();
````
__Player.js__
````
function Player(){
  this.width;
  this.height;
  this.image;
  this.points
};
Player.move();
````
__Projectiles.js__
````
function Items(){
  this.width;
  this.height;
  this.image
};
drawItems();

````  

__Enemies.js__
````
function Items(){
  this.width;
  this.height;
  this.image
};
drawItems();

````  

