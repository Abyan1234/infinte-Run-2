
var player,ground,obstacle,backgrounds; 
var obstacleGroup;
var playerIMG,obstacleIMG,backgroundsIMG;

function preload(){
  playerIMG=loadImage("player3.png");
  obstacleIMG=loadImage("obstacleG1.png");
  backgroundsIMG=loadImage("background.jpg");
  
  }
  

  
  

function obstacles(){


if (World.frameCount%300 === 0) {
   obstacle = createSprite(430, 325, 20, 20);
  
   
      
 
  obstacle.velocityX=-8;
  obstacle.lifetime=110;
  obstacle.addImage(obstacleIMG);
 obstacle.scale=0.5;

  obstacleGroup.add(obstacle);
 
  }
}
var Play=1;
var End=0;
var gameState=Play;

var score=0;




function setup(){
  
  
  
  backgrounds=createSprite(190,290,60,60);
  backgrounds.addImage(backgroundsIMG);
  backgrounds.scale=2;
  
  player = createSprite(85, 325, 20, 20);
  player.addImage(playerIMG);
  player.scale=0.2;

 ground = createSprite(300 ,360, 800, 15);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 
 obstacleGroup = createGroup();



}

function draw() {
  
  //Score Board
background("black")
  stroke("black");
  textSize(20);
  fill("black");
  
  
  player.collide(ground);
  
  if (gameState===Play) {
    score=Math.ceil(frameCount/frameRate());
    fill("white");
    text("score: "+score ,100,50);
  }
  
    //Endless Ground
    if (ground.x < 0) {
    ground.x=ground.width/2;
  }
  
  //objects
   
  obstacles();  
    
  //player jumps  
  if (keyDown("space")&&player.y  >=320 ) {
      player.velocityY=-14;
    }
     
 
       
   if (player.isTouching(obstacleGroup)) {
       gameState=End;
     }
       
      
    
   else if (gameState===End) {
    
    player.destroy();
    obstacleGroup.destroyEach();
    ground.destroy();
    backgrounds.destroy();
   textSize(22);
   fill("white");
   text("Game Over",200,200)
   
  }
   
  
  //Adds Gravity
  player.velocityY=player.velocityY+0.65;

  
    
  drawSprites();
  
}