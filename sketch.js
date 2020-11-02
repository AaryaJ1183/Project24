
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var LeftDustbin, RightDustbin, MiddleDustbin;
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	MiddleDustbin = new Dustbin (1400,500,200,20)
	LeftDustbin = new Dustbin (1300,455,20,100)
	RightDustbin = new Dustbin (1500,455,20,100)

	Engine.run(engine);
  
	 //creating the crumpled paper
	 paper = new Paper(350,500,20)

	 ground = new Ground(900,510,2000,10);
}


function draw() {
  rectMode(CENTER);
  background(0);

  LeftDustbin.display();
  MiddleDustbin.display();
  RightDustbin.display();
  paper.display();
  ground.display();
}

function keyPressed() {

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}

}


