
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
  tree_img = loadImage("tree.jpg")
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
}

rock = new Rock(100,350,100,100)

function draw() 
{
  background(tree_img);
  Engine.update(engine);
  
}

