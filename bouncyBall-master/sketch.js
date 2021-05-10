const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var ground, ball;
var box1
var rope

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
ground=new Ground(600,580,1200,20)
box1=new Box(950,510,120,120)
box2=new Box(820,510,120,120)
box3=new Box(690,510,120,120)
box4=new Box(950,395,120,120)
box5=new Box(820,395,120,120)
box6=new Box(690,395,120,120)
box7=new Box(950,270,120,120)
box8=new Box(820,270,120,120)
box9=new Box(690,270,120,120)
ball=new Ball(300,300,60)
rope=new Rope(ball.body,{x:500,y:50})
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
   ground.display()
   box1.display()
   box2.display()
   box3.display()
   box4.display()
   box5.display()
   box6.display()
   box7.display()
   box8.display()
   box9.display()
   ball.display()
   rope.display()
}
