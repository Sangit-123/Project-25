
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash1,trash2,trash3
var ground
var ball1
var trashImage

function preload(){
	trashImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	trash1=new Trash(700,500,20,120)
	trash2=new Trash(630,550,120,20)
	trash3=new Trash(570,500,20,120)
	ground=new Ground()
    ball1=new Ball(200,540,25)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  trash1.display()
  trash2.display()
  trash3.display()
  ground.display()
  ball1.display()
  image(trashImage,550,430,180,200)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball1.ball,ball1.ball.position,{x:85,y:-85});
	}
}

