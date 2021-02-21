const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground, groundBase;
var dominoe1, dominoe2, dominoe3, dominoe4, dominoe5, dominoe6, dominoe7, dominoe8, dominoe9, dominoe10;
var ball;
var constraint1;

function setup(){
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;

	groundBase = new Ground (300,600,600,20);
	ground = new Ground (400,400,310,10)
	ball = new Ball (200,350,30);
	constraint1 = new Rope (ball.body, {x: 200, y: 100});
	
	dominoe1 = new Dominoes (270,355,20,80);
	dominoe2 = new Dominoes (300,355,20,80);
	dominoe3 = new Dominoes (330,355,20,80);
	dominoe4 = new Dominoes (360,355,20,80);
	dominoe5 = new Dominoes (390,355,20,80);
	dominoe6 = new Dominoes (420,355,20,80);
	dominoe7 = new Dominoes (450,355,20,80);
	dominoe8 = new Dominoes (480,355,20,80);
	dominoe9 = new Dominoes (510,355,20,80);
	dominoe10 = new Dominoes (540,355,20,80);

	
	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background("lavender");
  Engine.update(engine)
  
  groundBase.display();
  ground.display();
  constraint1.display();
  ball.display();

  dominoe1.display();
  dominoe2.display();
  dominoe3.display();
  dominoe4.display();
  dominoe5.display();
  dominoe6.display();
  dominoe7.display();
  dominoe8.display();
  dominoe9.display();
  dominoe10.display();

  drawSprites();	
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
}