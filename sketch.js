var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var score=5


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  obstacleImg1 = loadImage("obstacle1.png")
  obstacleImg2 = loadImage("obstacle2.png")
  obstacleImg3 = loadImage("obstacle3.png")
  obstacleImg4 = loadImage("obstacle4.png")
  obstacleImg5 = loadImage("obstacle5.png")
  obstacleImg6 = loadImage("obstacle6.png")
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
 // var longrect = createSprite(300,100,10,100)
  //longrect.collide(invisibleGround)
 
}                   
    
function draw() {
  background(180);
  
  text("Score:"+score,50,50)
  
  if(keyDown("space") && trex.y>=100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  
  obstacles();

  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;

    cloud.lifetime =200;
    }
    
}



function death(){

}























function obstacles(){
 if(frameCount % 70 === 0){
  var obstacle=createSprite(600,160,10,10)
  obstacle.velocityX=-5
 obstacle.collide(invisibleGround)
 // obstacle.addImage(obstacleImg1)
  console.log(frameCount);

 var rn = Math.round(random(1,6))
 console.log(rn)

switch(rn){
  case 1: obstacle.addImage(obstacleImg1)
  break ;

  case 2: obstacle.addImage(obstacleImg2)
  break ;

  case 3: obstacle.addImage(obstacleImg3)
  break ;

  case 4: obstacle.addImage(obstacleImg4)
  break ;

  case 5: obstacle.addImage(obstacleImg5)
  break ;

  case 6: obstacle.addImage(obstacleImg6)
  break ;

  default: break;
}
obstacle.scale=.7
  
}
}


/* LIFETIME : 
TIME, DISTANCE AND SPEED 
TIME = D/S
T = 600/3 =200



*/  