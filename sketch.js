
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbinImage = loadImage("trash can.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


  Engine.run(engine);
  ground = new Ground (400,639,800,10);   
  box1 = new Ball(40,200,40);
  box2 = new Box(500,557,20,100);
  
  box3 = new Box(420,615,180,15);
  box4 = new Box(333,557,20,100);
  keyPressed2();
  keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box1.display();
  box2.display();
  box3.display();
  
  box4.display();
  image(dustbinImage,310,460,210,180);
  fill("red");
  ground.display();
  
  drawSprites();
 
}

function keyPressed () { 
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(box1.body,box1.body.position,{x:170,y:-300});
  }
}
function keyPressed2() { 
  if (keyCode === DOWN_ARROW) {
    Matter.Body.applyForce(box1.body,box1.body.position,{x:-170,y:300});
  }
}


