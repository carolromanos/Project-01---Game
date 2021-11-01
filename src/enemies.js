//PLAYER PROJECTILES
class Enemy {
    constructor(ctx, x, y, radius, color, speed) {
        this.ctx = ctx 
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.speed = speed
    }
    draw(){
        this.ctx.beginPath()
        this.ctx.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
    }

    update(){
        this.x = this.x + this.speed.x
        this.y = this.y + this.speed.y
    }

}