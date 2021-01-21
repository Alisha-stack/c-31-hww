const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop1;
var drop2,drop3;

function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
//    drop1 = new Drops(200,200,5);
//    drop2 = new Drops(300,100,5);
//    drop3 = new Drops(150,150,5);


    
}

function draw(){
    background("black");
    Engine.update(engine);
    // drop1.display();
    // drop2.display();
    // drop3.display();
    
    
    }