var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(30, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(130, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10  );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color("red");

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x=helicopterSprite.x+2;
	
  }
  if(keyDown("LEFT_ARROW")){
	helicopterSprite.x=helicopterSprite.x-2;
	
  }

  if(keyDown("DOWN_ARROW")){
	  Matter.Body.setStatic(packageBody,false)
  }

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  strokeWeight(6);
  stroke("orange");
  fill("green");
  textSize(17);
  textFont("Times New Roman");
  text("You are a sergeant on a military peacekeeping mission.",10,30);
  text("Your task is to drop a package in a designated red drop zone.",30,60)
  text("The package contains mission-critical items and is very important to be",50,90);
  text("delivered at the exact location for the success of the mission.",70,120);
  text("Everyone before you has failed to finish the task. The success of the mission now depends on you.",90,150);
  

  if(packageSprite.isTouching(boxBase)){
	  text("MISSION SUCCESSFUL",300,500);
  }
  
	  packageSprite.x=helicopterSprite.x;
  
  if(helicopterSprite.isTouching(packageSprite)){
	  packageSprite.x=helicopterSprite.x;
  }

  drawSprites();
  
  
 
}
