class Dominoes{
    constructor(x,y,width,height){
      var options = {
        restitution: 0.5,
        friction: 0,
        density: 1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   //this.image = loadImage('dustbingreen.png')

    World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle
        push()
        rotate(angle);
        //translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("pink");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
        pop()
    }
} 