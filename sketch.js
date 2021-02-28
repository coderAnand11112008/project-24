
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,1000,20)

    rubber1 = new Rubber(700,320,70,70);
    iron1 = new Iron(920,320,70,70);
    hammer1 = new Hammer(110, 350, 100, 70);
    stone1 = new Stone(210,260,300, 30);
    sand1 = new Sand(720,240,70,70);
    
    
	Engine.run(engine);
  
}


function draw() {
  background("red");
 
  Engine.update(engine);
    ground.display();
    rubber1.display();
    iron1.display();
    hammer1.display();
    stone1.display();
    sand1.display();
  drawSprites();
 
}



