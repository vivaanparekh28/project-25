
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubbish
var ground
function preload()
{
	dustbinimage=loadImage("./dustbin.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
rubbish=new Ball()
ground=new Floor()
dustbin=new Bin(755,625,20,400)

bin1=new Bin(600,625,20,400)
bin2=new Bin(670,675,160,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rubbish.display()
  imageMode(CENTER)
  image(dustbinimage,bin2.body.position.x,bin2.body.position.y-200,250,400)

ground.display()
//bin1.display()
  //bin2.display()
 // dustbin.display()
 
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(rubbish.body,rubbish.body.position,{x:55,y:-105})

	}
}



