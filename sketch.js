
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4;
var bar,bar1;
var chain1,chain2,chain3,chain4;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	bar1 = new Bar(350,100,110,10)
	bar = new Bar(400,100,100,10);
	ball3 = new Ball(340,475,50);
	ball2 = new Ball(380,475,50);
	ball1 = new Ball(420,475,50);
	ball4 = new Ball(460,475,50);
	
	
	chain1 = new Chain(ball3.body,bar.body,-80,0);
	chain2 = new Chain(ball2.body,bar.body,-40,0);
	chain3 = new Chain(ball1.body,bar.body,0,0);
	chain4 = new Chain(ball4.body,bar.body,20,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  
  drawSprites();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 bar.display();
  bar1.display();
 chain1.display();
 chain2.display();
 chain3.display();
 chain4.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball3.body,ball3.body.position,{x:-200,y:-180});

	}
}



