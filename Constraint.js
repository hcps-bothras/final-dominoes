class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 220,
            stiffness: 1
        }

        this.constraint = Constraint.create (options);
        this.pointB = pointB
        World.add(world, this.constraint);
    }

    display(){
        strokeWeight (3)
        stroke ("white")
        var a = this.constraint.bodyA.position
        var b = this.pointB
        line(a.x, a.y, b.x, b.y);
    }
}