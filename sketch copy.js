// Renaming the modules of Matter.js library -- NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground,box1,box2;

function setup(){
  createCanvas(800,400);

  // Creating an engine in our application to make physics simulations
  engine =  Engine.create();

  // Whenever an engine is created, a world is created inside it by default
  // Renaming or namespacing the world created

  world = engine.world;

  box1 = new Box(400,200,50,50);
  console.log(box1);

  box2 =new Box(400,100,50,100);
  console.log(box2);

  // Adding the body created to the world .. using Matter.World module
  // World.add(world,box1);
  // World.add(world,box2);
  

  
}

function draw(){
  background("lightblue");

  Engine.update(engine);

  // console.log(box1.position.x);
  //  console.log(box1.position.y);

  // rect takes x and y as the left corner of the rectangle.. to change it to center using rectMode 
  //https://p5js.org/reference/#/p5/rectMode
   rectMode(CENTER)
   rect ( box1.position.x,box1.position.y,50,50);

   rect (box2.position.x , box2.position.y,50,100);

  

}