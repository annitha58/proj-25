
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render

var paper, dustbin, ground;
var world, engine;

function preload()
{
   
}

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
  
  dustbin = new Dustbin (1200, 650);
  paper = new Paper(200,400,50);
  ground = new Ground(width/2, 670, width, 20);

  var render = Render.create({
    element: document.body,
    engine: engine, 
    options: {
      width: 1200,
      height: 700,
      wireFrames: false
    }
  })

	Engine.run(engine);
}


function draw() {
  background(0);

  dustbin.display();
  paper.display();
  ground.display();

  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.body.applyForce(paper.body, paper.body.position,{x: 1100, y: 10});
  }
}


