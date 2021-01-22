const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "tank_bg.png";
var score = 0;
var tank1,tank1Img,tank2,tank2Img;
var ball,ballImg;

function preload() {
   backgroundImg=loadImage(bg);
   tank1Img=loadImage("tank_1.png");
   tank2Img=loadImage("tank_2.png");
   ballImg=loadImage("ball.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

tank1 = createSprite(50,displayHeight/2,20,20);
tank1.addImage(tank1Img);
    
tank2 = createSprite(displayWidth-60,displayHeight/2,20,20);
tank2.addImage(tank2Img);

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    spawnBall();
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
if(keyDown(UP_ARROW) && tank1.y>0){
    tank1.y = tank1.y-3;
}
if(keyDown(DOWN_ARROW) && tank1.y<displayHeight){
    tank1.y = tank1.y+3;
}
if(keyDown("w") && tank2.y>0){
    tank2.y = tank2.y-3;
}
if(keyDown("s") && tank2.y<displayHeight){
    tank2.y = tank2.y+3;
}

    Engine.update(engine);
    //strokeWeight(4);
 drawSprites();   
}

function spawnBall(){
    if(frameCount%50===0){
ball = createSprite(displayWidth/2,displayHeight,20,20);
ball.addImage(ballImg);
ball.scale=0.125;
ball.lifetime=230;
ball.velocityY=-4;
    }
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:200,y:50});
       slingshot.attach(bird.body);
    }
}

