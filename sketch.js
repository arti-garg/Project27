
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, bob1, bob2, bob3, bob4, bob5, r1, r2, r3, r4,r5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof= new Roof();


bob1= new Bob(300, 400);
bob2= new Bob(350, 400);
bob3= new Bob(400, 400);
bob4= new Bob(450, 400);
bob5= new Bob(500, 400);

r1= new Rope(bob1.body, roof.body, -100);
r2= new Rope(bob2.body, roof.body,-50);
r3= new Rope(bob3.body, roof.body,0);
r4= new Rope(bob4.body, roof.body,50);
r5= new Rope(bob5.body, roof.body,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
roof.display();
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();

r1.display();
r2.display();
r3.display();
r4.display();
r5.display() ;
}

function keyPressed(){

if (keyCode=== UP_ARROW){

	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-30, y: -20})
}

}



