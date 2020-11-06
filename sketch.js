
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground
var boxbottom,boxleft,boxleft

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;
ground = new Ground(600,580,1200,10)
	paper = new Paper(200,450,40)
  boxbottom = Bodies.rectangle(950,560,200,20,{isStatic:true});
  World.add(world,boxbottom)

boxright = Bodies.rectangle(1050,520,20,100,{isStatic:true});
World.add(world,boxright);

boxleft = Bodies.rectangle(860,520,20,200,{isStatic:true});
World.add(world,boxleft)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  fill ("red")
  rect(boxbottom.position.x,boxbottom.position.y,200,20)
  fill ("red")
  rect(boxright.position.x,boxright.position.y,20,100)
  fill ("red")
  rect (boxleft.position.x,boxleft.position.y,20,100)

  drawSprites();


 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  }
}

