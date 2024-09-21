//game states
var PLAY = 1;
var END = 0;
var gameState = 1;

var sword,fruit,monsterGroup,fruitGroup,enemyGroup,score,r,randomFruit;
var swordImage,fruit1,fruit2,fruit3,fruit4,monsterImage,gameOverImage,knifeswooshSound,gameoverSound;

function preload(){
  
swordImage = loadImage("swordImage");
monsterImage = loadAnimation("alien1.png","alien2.png");
fruit1 = loadImage("fruit1.png"); 
fruit2 = loadImage("fruit2.png"); 
fruit3 = loadImage("fruit3.png"); 
fruit4 = loadImage("fruit4.png"); 
gameOverImage = loadImage("gameover.png");
knifeswooshSound = loadSound("knifeSwooshSound.mp3");
gameoverSound = loadSound("gameover.mp3");
}

function setup(){
createCanvas(600,600);
  
//creating sword
  sword.createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale = 0.7;
  
//set collider for sword
  sword.setCollider("rectangle",0,0,40,40);
  
//score variable and groups
  score = 0;
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
}

function draw(){
background("lightblue");
  
if(gameState === PLAY){
  
//call fruit and enemy function
  fruit();
  enemy();
  
//move sword with mouse
  sword.x = World.mouseX;
  sword.y = World.mouseY;
  
//increase score if sword is touching the fruit
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    knifeswooshSound.play();
    score = score+2;
  }

  else
{
  //go to gamestate end when the sword touches the enemy group
  if(enemyGroup.isTouching(sword)){
    gameState = END;
    //add sound for gameover
    gameoverSound.play();
    //destroy the fruit and enemy group
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
  //change the animation of sword to gameover and reset its position
   sword.addImage(gameOverImage);
   sword.x = 200;
   sword.y = 200;
   }   
  }
 }

drawSprite();

//display score
text("score:"+score,300,30);
}

function enemy(){
  if(World.frameCount % 150==0){
    monster = createSprite(400,200,20,20);
    monster.addAnimation("moving",monsterImage);
    monster.y = Math.round(random(100,300));
    monster.velocityX = -(4+1* score/10);
    monster.setLifetime = 50;
    enemyGroup.add(monster);
    
  }
}

function fruits(){
  if(world.frameCount % 80 === 0){
    position = Math.round(random(1,2))
    fruit = createSprite(400,200,40,40);
    
    if(position == 1){
      fruit.x = 400;
      fruit.velocityX = -(7+3* score/4);
    }else{
      if(position == 2){
        fruit.x = 0;
        fruit.velocityX = -(7+3*score/4);
      }
    }
 fruit.scale = 0.2
 r = Math.round(random(1,4));
   if(r == 1){
     fruit.addImage(fruit1);
   }else if(r == 2){
     fruit.addImage(fruit2);
   }else if(r == 3){
     fruit.addImage(fruit3);
   }else{
     fruit.addImage(fruit4);
   }
   
  fruit.y = Math.round(random(50,340));
  
  fruit.velocityX = -(7+3* score/4);
  fruit.setLifetime = 100;
    
    fruitGroup.add(fruit);
  
  
  }
}
//Game States
var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit ,monster,fruitGroup,enemyGroup, score,r,randomFruit;
var swordImage , fruit1, fruit2 ,fruit3,fruit4, monsterImage, gameOverImage


function preload(){
  
  swordImage = loadImage("sword.png");
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png")
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating sword
   sword=createSprite(40,200,20,20);
   sword.addImage(swordImage);
   sword.scale=0.7
  //sword.debug = true;
  //set collider for sword
  //sword.setCollider("rectangle",0,0,100,100);

  // Score variables and Groups
  score=0;
  fruitGroup=createGroup();
  enemyGroup=createGroup();
  
}

function draw() {
  background("lightblue");
  
  if(gameState===PLAY){
    
    //Call fruits and Enemy function
    fruits();
    Enemy();
    
    // Move sword with mouse
    sword.y=World.mouseY;
    sword.x=World.mouseX;
  
    // Increase score if sword touching fruit
    if(fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
    }
    else
    {
      // Go to end state if sword touching enemy
      if(enemyGroup.isTouching(sword)){
        gameState=END;
        
        fruitGroup.destroyEach();
        enemyGroup.destroyEach();
        fruitGroup.setVelocityXEach(0);
        enemyGroup.setVelocityXEach(0);
        
        // Change the animation of sword to gameover and reset its position
        sword.addImage(gameOverImage);
        sword.x=300
        sword.y=300
        sword.scale=2
      }
    }
  }
  
  drawSprites();
  
  //Display score
  textSize(40)
  fill(0)
  stroke(255)
  strokeWeight(4)
  text("Score : "+ score,225,50)
  
}


function Enemy(){
  if(World.frameCount%100===0){
    monster=createSprite(600,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(50,350))
    monster.velocityX=-30
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
}

function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(600,200,20,20);
    fruit.scale=0.2;
     //fruit.debug=true;
     r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }
    
    fruit.y=Math.round(random(50,340));
   
    fruit.velocityX=-40;
    fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}