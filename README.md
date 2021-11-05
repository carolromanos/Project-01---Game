# Enraged Square

In a 

## How does the game work?
The game screen is a interface where food ingredients and knives will be displayed. Our player, Chef Cocô, can move in all directions and as he is in a hurry, he needs to grab all the ingredients he needs in les than 1 minute. The game is won when our Chef takes the 10 ingredients he needs in 1 minute or less!! If he accidentally bumps into a knive.. game over!

A new ingredient will appear everytime another ingredient is taken - so, you should be fast! Also, as time runs more knives will be in the board game...

* * *
## MVP
### Technique
HTML5, DOM, **Canvas** and Vanilla **Javascript**

### Game states
* __Start Screen__
  * Title
  * Start Game button
  * Player's name input field
* __Game Screen__
  * Canvas
* __Game Over Screen__
  * Play again button
  * Go to start screen button

### Game
* Create interface
* Create player
* Move player
  * Press arrow keys to move the player around the board.
* Create ingredients
  * Each ingredient will be created once the previous one is taken
* Create knives
  * Define a setInterval where knives will be created every 10 seconds
* Check collision
  * If there is a collision with an ingredient => player gains points and new ingredient is shown
  * If there is a collision with a knive => Game Over => Show Game Over Screen
* * *

### User stories
- User can see a readme file with all the game instructions
- User can see the Start Screen
- User can click on the "Start Game" button
- User can see the Game Screen
- User can see the Canvas
- User can see the Player
- User can see a Canvas background image
- User can move the Player left and right
- User can move the Player up and down
- User can see an ingredient in the canvas
- User can pick up the ingredient (collide)
- User can see its points/score increasing
- User can see a knife in the canvas
- User can be killed when colliding with a knife
- User can see a countdown timer
- User can see the Game Over Screen
- User can see a Play again button
- User can click on Play again button
- User can see its total score

## BACK LOG
### Music
* Add music on and off button to setup
* Add sound effects on and off button to setup
### Levels
* Check phase and increase level
  * Increase the speed of knives being created 

## Data structure
__main.js__
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
__Items.js__
````
function Items(){
  this.width;
  this.height;
  this.image
};
drawItems();

*Here there will be subclasses for ingredients and for knives*
````  
