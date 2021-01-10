
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var roof,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(width/2,height/4,width/7,20);
	bobDiameter=40;
	bobStartPosX=width/2;
	bobStartPosY=height/4+500;

	bob1=new Bob(bobStartPosX-bobDiameter*2,bobStartPosY,bobDiameter);
	bob2=new Bob(bobStartPosX-bobDiameter,bobStartPosY,bobDiameter);
	bob3=new Bob(bobStartPosX,bobStartPosY,bobDiameter);
	bob4=new Bob(bobStartPosX+bobDiameter,bobStartPosY,bobDiameter);
	bob5=new Bob(bobStartPosX+bobDiameter*2,bobStartPosY,bobDiameter);


	rope1=new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1,0);
	rope3=new Rope(bob3.body,roof.body,0,0);
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1,0);
	rope5=new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
   
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-40,y:-40});
	}
}



