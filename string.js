class Rope {
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.5,
            length: 9
        }
        this.rope = Constraint.create(options)
        this.pointB = pointB
        World.add(World, this.rope)
    }
    display(){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        strokeWeight(2)
        line(pointA.x, pointA.y, pointB.x, pointB.y)
    }
}