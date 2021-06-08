var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mario, mario_running, mario_collided, mario_walk;
var ground, invisibleGround, groundImage;
var backgroundImage;
var cloudsGroup, cloudImage;
;

var score=0;



localStorage["HighestScore"] = 0;

function preload(){
  mario_running =   loadAnimation("images/walk1.png","images/walk2.png","images/walk3.png");
  mario_collided = loadAnimation("images/marioUp.png");
 
  
  groundImage = loadImage("images/ground.png");
  backgroundImage = loadImage("images/day.jpg");
  
  cloudImage = loadImage("images/cloud.png");
  
  ;
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight-120);
  
  
  mario = createSprite(100,180,20,50);
  
  mario.addAnimation("running", mario_running);

  mario.addAnimation("collided", mario_collided);
  mario.scale = 0.55;
  
  ground = createSprite(200,180,700,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  
  
  
  

  
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  textSize(18);

  textFont("Georgia");
  textStyle(BOLD);
  fill("white");
  score = 0;
}

function draw() {
  
  camera.x = mario.x;
  camera.y = mario.y;

  

  background(backgroundImage);
  
  textAlign(RIGHT, TOP);
  text("Score: "+ score, 600,5);
 
  if (gameState===PLAY){
    score = score + Math.round(getFrameRate()/60);
    ground.velocityX = -(6 + 3*score/100);
    

    
   
    
    mario.velocityY = mario.velocityY + 0.8
  
    if (ground.x < 0){
      ground.x = ground.width/3;
    }
  
    mario.collide(invisibleGround);
    
  
    
  }
  else if (gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    ground.velocityX = 0;
    mario.velocityY = 0;
    
    //change the mario animation
  
    mario.changeAnimation("collided",mario_collided);
    
    
    
    


  }
  
  drawSprites();
}


  score = 0;
  

