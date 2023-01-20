
var trex ,trex_running;
var ground;
ground.AddImage;

function preload(){
  trex_running = loadAnimation("./trex1.png", "./trex3.png", "./trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
  trex = createSprite (50,150,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  //crear ground(suelo)
  ground = createSprite (0,160,600,20);

}

function draw(){
  background("white");
  if(keyDown("space")){
   trex.velocityY = -10
  }

  trex.velocityY = trex.velocityY +0.8;
  


  trex.collide(ground);
  drawSprites();
}
