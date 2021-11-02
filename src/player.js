//CREATE PLAYER
class Player{
    constructor(canvas, ctx) {
        this.canvas = canvas
        this.ctx = ctx
        this.x = this.canvas.width / 2
        this.y = this.canvas.height / 2
        this.size = 30;
        this.vx= 0;
        this.vy= 0;
        this.ax= 0; 
        this.ay= 0;
        this.friction = 0.95
        this.r = 0;
        this.acceleration = 0.2
    }

    draw(){        
        this.ctx.save();
        this.ctx.translate(this.x, this.y);
        this.ctx.rotate(this.r);
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect( -this.size/2, -this.size/2, this.size, this.size); 
        this.ctx.restore();
    }
  
    update(){
        
        //update velocity
        this.vx += this.ax;
        this.vy += this.ay;
      
        //cheat's friction (friction = 0.97)
        this.vx *= this.friction;
        this.vy *= this.friction;
    
        
        //update position
        this.x += this.vx;
        this.y += this.vy;
        
        this.checkBorderCollision()
   
    }

    setSpeed(acceleration){

        if(acceleration === "up"){
            if(this.acceleration < 1){
            this.ax = Math.cos(this.r) * this.acceleration;
            this.ay = Math.sin(this.r) * this.acceleration;
            }
        }

    }
    resetSpeed(){
       
      this.ax =0
      this.ay =0     
    }

    setDirection(direction){
        switch (direction) {
            case "left":  /* Left arrow was pressed */
            this.r -= 0.2;
            break;

            case "right":  /* Right arrow was pressed */
            this.r += 0.2;
            break;
            }
    }

    checkBorderCollision(){
        if(this.x < 0) this.x = this.canvas.width
        if( this.x > this.canvas.width) { this.x = 0}
        if(this.y  < 0) this.y = this.canvas.height
        if( this.y > this.canvas.height) { this.y = 0}        }   
}

   


