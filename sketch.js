const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  var option={
    isStatic:true
  }
  var ballOptions={
    restitution:1.0
  }
  ground=Bodies.rectangle(200,390,50,50,option);
  World.add(world,ground);
  //console.log(object.position.x);
  //console.log(object.position.y);
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);
}

function draw() {
  background("blue"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20); 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}
