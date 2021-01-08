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

  ground = new Ground(400,380,width,20);
  console.log(ground)

  box1 = new Box(370,200,50,50);
  console.log(box1);

  box2 =new Box(400,100,50,100);
  console.log(box2);

  // Adding the body created to the world .. using Matter.World module
  

  
}

function draw(){
  background("lightblue");

  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();

  


  

}