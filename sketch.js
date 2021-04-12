const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 

var boyImage; 

function preload () {
	 boyImage = loadImage("boy.png"); 
}

function setup () {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(700, 70, 25); 
	mango2 = new Mango(650, 90, 25); 
	mango3 = new Mango(577, 376, 25); 
	mango4 = new Mango(550, 200, 25); 
	mango5 = new Mango(500, 333, 25); 

	stoneObject = new StoneforThrowing(250, 490, 30); 
	treeStanding = new Tree(700, 650, 50, 200); 
	ground = new Ground(400, 650, 800, 50); 
	chain = new ChainBS(stoneObject.body, {x: 250, y: 490}); 

	console.log(stoneObject)

	Engine.run(engine);
}

function draw () {
  rectMode(CENTER);
  background("white");

  text(mouseX + "," + mouseY, mouseX, mouseY); 

  image(boyImage, 250, 425, 100, 250);

  mango1.display(); 
  mango2.display(); 
  mango3.display(); 
  mango4.display(); 
  mango5.display(); 

  stoneObject.display();
  treeStanding.display(); 
  ground.display(); 
  chain.display();
  
  detectcollision(stoneObject, mango1); 
  detectcollision(stoneObject, mango2); 
  detectcollision(stoneObject, mango3); 
  detectcollision(stoneObject, mango4); 
  detectcollision(stoneObject, mango5); 
  
  drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {
		Matter.Body.setPosition(stoneObject, {x: 235, y: 425}); 
		chain.attach(stoneObject.body); 
	}
}

function detectcollision(stone, mango) {
	 mangoBodyPosition = mango.body.position; 
	 stoneBodyPosition = stone.body.position; 

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y); 

	if (distance <= mango.radius + stone.radius) {
		Matter.Body.setStatic(mango.body, false); 
	}

}

function mouseDragged(){
    Matter.Body.setPosition(stoneObject.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
} 