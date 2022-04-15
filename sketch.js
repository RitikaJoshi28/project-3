const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var snow,snow_img;


function setup() {
  createCanvas(800,400);
  engine=Engine.create;
  world=engine.world;
  var options=
  {
    isStatic:true,
    ground=Bodies.rectangle(200,100,50,50,options)
  }
  
   //ground=Bodies.rectangle(200,100,50,50,options);
   World.add(world.ground);
   console.log(ground);
   
   ball=Bodies.circle(200,100,20);
   world.add(world.ball);
 snow= new Snow(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  rectMode(CENTER);
  ground(200,200,50,50);
    ground(ground.position.x,ground.position.y,50,50);


   
  drawSprites();
}