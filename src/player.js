//CREATE PLAYER
class Player{
    constructor(canvas, radius, color) {
        this.canvas = canvas
        this.ctx = this.canvas.getContext("2d");
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height / 2;
        this.radius = radius;
        this.color = color
    }

    draw(){
        this.ctx.beginPath()
        this.ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
    }
}

