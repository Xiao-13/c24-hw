
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,800,20);
	paper = new Paper(100, 300, 10);
	dustbin1 = new Dustbin(600,690,150,10);
	dustbin2 = new Dustbin(525,640,10,100);
	dustbin3 = new Dustbin(675,640,10,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  drawSprites();
}


function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15}); 
		} 
	}


