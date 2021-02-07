
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
  bob = new Bob(420, 400)
  bob2 = new Bob(500, 400)
  bob3 = new Bob(280, 400)
  bob4 = new Bob(200, 400)
  //bob5 = new Bob(340, 400)
  roof = new Roof(350, 100, 400, 20)
  
  string1 = new Rope(bob.body,{x:420, y:100})
  string2 = new Rope(bob2.body,{x:500, y:100})
  string3 = new Rope(bob3.body,{x:280, y:100})
  string4 = new Rope(bob4.body,{x:200, y:100})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  string1.display()
  bob.display()
  string2.display()
  bob2.display()
  string3.display()
  bob3.display()
  string4.display()
  bob4.display()

  roof.display()
  keyPressed()
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob2.body, bob2.body.position,{x:120,y:-120})
  }
}
