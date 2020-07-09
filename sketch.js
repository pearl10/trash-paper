
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var binLog1,log2;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=new Ball(175,220);
	binLog1=new Bin(500,660,275,20);
	Log2=new Bin(650,660,275,20);
	
	Engine.run(engine);
	ball=new Ball(175,220);
	binLog=new Bin(800,340,275,PI/2);
    ground=new Ground(400,680,800,20);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball.display();
 binLog1.display();
 Log2.display();
 ground.display();
}



