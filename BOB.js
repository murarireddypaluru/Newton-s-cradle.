class Bob{
    constructor(x, y){
        var bob_option = {
            isStatic : true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x, y, 40, bob_option)
        this.r = 40
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        translate(pos.x, pos.y)
        fill("pink")
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r, this.r)
        pop()
    }
}