
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var PLAY = 0;
var END = 1;
var gameState = PLAY;
var ground , groundImage;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.jpg");
  obstaceImage = loadImage("obstacle.png");
  groundImage = loadImage("forest.jpg");
 
}



function setup() {
  createCanvas(600,300);
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  
  ground = createSprite(300,190,1000,500);
  ground. addImage("ground",groundImage);
  ground.scale=0.5
  
   
  ground = createSprite(300,190,1000,20);
  ground. addImage("ground",groundImage);
  ground.scale=0.5
  
 
  
  
  monkey=createSprite(30,250,30,50);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
   invisiGround = createSprite(300,278,600,7);
  invisiGround.visible = false;
  
  
  
}


function draw() {
  fill("black");
  text("SURVIVAL TIME: "+score, 470, 20);
  text("BANANAS COLLECTED: "+bananaScore,300,20);
  
  if (gameState === PLAY){
    
    score = score + Math.round(getFrameRate()/60);
 
  ground.velocityX = -20
    
    if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13; 
    }
  monkey.velocityY = monkey.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
     if (monkey.isTouching(bananaGroup)){
      bananaScore++;  
      bananaGroup.destroyEach();
    
    }
    
    
    if (monkey.isTouching(obstacleGroup)){
      gameState = END;
    }

  
  }
  
     if (gameState === END){
    ground.velocityX = 0;
  
     }
  drawSprites();
   monkey.collide(invisiGround);


}


