
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var box
var retangulo
var chão
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	ball = Bodies.circle(400,50,50)
	World.add(world, ball)
	box = Bodies.rectangle(200,50,80,80)
	World.add(world, box)
	retangulo = Bodies.rectangle(600,50,100,50)
	World.add(world, retangulo)
	chão = Bodies.rectangle(400,690,800,20,{isStatic: true})
	World.add(world, chão)
	Engine.run(engine);
	
}



function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  rect(box.position.x, box.position.y, 80,80)
  rect(retangulo.position.x, retangulo.position.y, 100,50)
  rect(chão.position.x, chão.position.y, 800,20)
  ellipse(ball.position.x, ball.position.y, 50)
  

  Engine.update(engine)
  drawSprites()
}



