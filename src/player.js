//CREATE PLAYER
class Player{
    constructor(canvas, color) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.size = 50;
        this.color = color
        this.dy = 5
        this.dx = 5
 
    }

    draw(){

        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
     
        
        
    }
    setDirection(direction){
        switch (direction) {
            case "up":  /* Up arrow was pressed */
            this.y -= this.dy;
            
            break;
            case "down":  /* Down arrow was pressed */
           
            this.y += this.dy;
            
            break;
            case "left":  /* Left arrow was pressed */
         
            this.x -= this.dx;
            
            break;
            case "right":  /* Right arrow was pressed */
           
            this.x += this.dx;
            
            break;
            }
    }
}



