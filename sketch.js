var pc, pcImage;
var Back;
var obstaclesGroup, meteorImg;
var npc, npcImage;
var PLAY = 0;
var PLAY2 = 1
var PLAY2 = 2
var PLAY3 = 3
var PLAY4 = 4
var PLAY5 = 5
var END = 6;
var NONE = 7
var gameState = PLAY;
var GameIMG;
score = 0


function preload(){
    backgroundImage = loadImage("Game.jpg")
    pcImage = loadImage("spaceShip.png")
    meteorImg = loadImage("meteor.png")
    npcImage = loadImage("npc.png")
    GameIMG = loadImage("Game Over.png")
}

function setup(){
    createCanvas(displayWidth, displayHeight);
    Back = createSprite(displayWidth/2,displayHeight/2)
    Back.addImage(backgroundImage)
    Back.velocityY = 5
  
    Back.scale = 1.5;
    pc = createSprite(690, 290, 50, 50)
  //  pc.debug = true;
    pc.setCollider("circle", 0, 0, 210)
    pc.addImage(pcImage)
    npc = createSprite(690, 490, 50, 50)
    npc.addImage(npcImage)
    pc.scale = 0.2
    npc.scale = 0.7
    obstaclesGroup = new Group();
    npc.velocityX = 5
    
}

function draw(){
    background("white")
    if (gameState === END){
        image(GameIMG, displayWidth/2-220,displayHeight/2-170, 600, 300);
         //text("Game END", displayWidth/2, displayHeight/2)
        }
   if(gameState === PLAY || gameState === PLAY2 || gameState === PLAY3 || gameState === PLAY4 || gameState === PLAY5){
        score = score + Math.round(getFrameRate()/60);
    }    
    if(gameState === NONE){
        text("Press N to move to next level", displayWidth/2, displayHeight/2)
    }
    console.log(score)
  //  if(gameState === END){
    //    text("Game END", displayWidth/2, displayHeight/2)
    //}
    if(gameState === PLAY){
            Level1();
           }
        if(score === 100){
        gameState = NONE
       if(keyDown("N")){ 
        gameState = PLAY2
       }
      }
       if(gameState === PLAY2){
           Level2();
       }
       if(score === 200){
       gameState = NONE
        if(keyDown("N")){ 
            gameState = PLAY3
        }
         }
       if(gameState === PLAY3){
           Level3();
       }
          if(score === 300){
              gameState = NONE
            if(keyDown("N")){
                 gameState = PLAY4
                }
       }
       if(gameState === PLAY4){
           Level4();
       }
        if(score === 400){
            gameState = NONE
            if(keyDown("N")){  
            gameState = PLAY5
          }
          
        }
        if(gameState === PLAY5){
            Level5();
        }
        
    }



function spawnObstacles() {
  if(frameCount % 100 === 0) {
    var obstacle = createSprite(600,0,10,40);
    var obstacle2 = createSprite(100,165,10,40);
    var obstacle3 = createSprite(displayWidth-50,165,10,40);
    obstacle.addImage(meteorImg)
    obstacle2.addImage(meteorImg)
    obstacle3.addImage(meteorImg)
    obstacle.x = Math.round(random(500,1000));
    obstacle2.y = Math.round(random(100,300));
    obstacle3.y = Math.round(random(100,300));
    //obstacle.debug = true;
    //obstacle.velocityX = -(6 + 3*score/100);
    obstacle.velocityY = 8
    obstacle2.velocityX = 5
    obstacle3.velocityX = -5
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle2.scale = 0.2;
    obstacle3.scale = 0.2;
    obstacle.lifetime = 250;
    obstacle2.lifetime = 150;
    obstacle3.lifetime = 150;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    obstaclesGroup.add(obstacle2);
    obstaclesGroup.add(obstacle3) 
  }
}

function spawnObstacles2() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 10
      obstacle2.velocityX = 7
      obstacle3.velocityX = -7
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 150;
      obstacle3.lifetime = 150;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
      obstaclesGroup.add(obstacle2);
      obstaclesGroup.add(obstacle3) 
    }
  }

  function spawnObstacles3() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 12
      obstacle2.velocityX = 9
      obstacle3.velocityX = -9
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 150;
      obstacle3.lifetime = 150;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
      obstaclesGroup.add(obstacle2);
      obstaclesGroup.add(obstacle3) 
    }
  }

  function spawnObstacles4() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 14
      obstacle2.velocityX = 11
      obstacle3.velocityX = -11
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 150;
      obstacle3.lifetime = 150;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
      obstaclesGroup.add(obstacle2);
      obstaclesGroup.add(obstacle3) 
    }
  }

  function spawnObstacles5() {
    if(frameCount % 100 === 0) {
      var obstacle = createSprite(600,0,10,40);
      var obstacle2 = createSprite(100,165,10,40);
      var obstacle3 = createSprite(displayWidth-50,165,10,40);
      obstacle.addImage(meteorImg)
      obstacle2.addImage(meteorImg)
      obstacle3.addImage(meteorImg)
      obstacle.x = Math.round(random(500,1000));
      obstacle2.y = Math.round(random(100,300));
      obstacle3.y = Math.round(random(100,300));
      //obstacle.debug = true;
      //obstacle.velocityX = -(6 + 3*score/100);
      obstacle.velocityY = 16
      obstacle2.velocityX = 50
      obstacle3.velocityX = -13
      //assign scale and lifetime to the obstacle           
      obstacle.scale = 0.2;
      obstacle2.scale = 0.2;
      obstacle3.scale = 0.2;
      obstacle.lifetime = 250;
      obstacle2.lifetime = 150;
      obstacle3.lifetime = 150;
      //add each obstacle to the group
      obstaclesGroup.add(obstacle);
      obstaclesGroup.add(obstacle2);
      obstaclesGroup.add(obstacle3) 
    }
  }


function spawnLasers(){
if(frameCount % 60 === 0){
var lasers =  createSprite(npc.x, npc.y-30, 5, 45)
lasers.shapeColor = "red"
lasers.depth = npc.depth;
npc.depth = npc.depth + 1;
lasers.velocityY = -5}
}

function spawnLasers2(){
    if(frameCount % 10 === 0 && keyDown("E")){
    var lasers =  createSprite(pc.x, pc.y, 5, 45)
    lasers.shapeColor = "lightblue"
    lasers.velocityY = -5}
    }

function Level1(){
    
    console.log("LEVEL 1");
    //score = score + Math.round(getFrameRate()/60);
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
  /* if (gameState === END){
   image(GameIMG, displayWidth/2,displayHeight/2, 600, 300);
    //text("Game END", displayWidth/2, displayHeight/2)
   }*/
    
}

function Level2(){

    console.log("LEVEL 2");
    
    //score = score + Math.round(getFrameRate()/60);
       //if(keyWentUp("N")){ 
           pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles2()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
   /* if(gameState === END){
   image(GameIMG, displayWidth/2,displayHeight/2, 600, 300);
   }*/
}
//}

function Level3(){
    console.log("LEVEL 3");
    //text("Press N to move to next level", displayWidth/2, displayHeight/2)
  
    //if(keyDown("N")){ 
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles3()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
  /*  if(gameState === END){
        image(GameIMG, displayWidth/2,displayHeight/2, 600, 300);
   }*/
}
//}

function Level4(){
    console.log("LEVEL 4");
   // text("Press N to move to next level", displayWidth/2, displayHeight/2)
   // score = score + Math.round(getFrameRate()/60);
   // if(keyDown("N")){ 
         pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles4()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
   /* if(gameState === END){
        image(GameIMG, displayWidth/2,displayHeight/2, 600, 300);
   }*/
}   
//}

function Level5(){
    console.log("LEVEL 5");
    console.log(score)
  //  text("Press N to move to next level", displayWidth/2, displayHeight/2)
  //  score = score + Math.round(getFrameRate()/60);
   // if(keyDown("N")){ 
        pc.velocityX = 0;
        pc.velocityY = 0;
    
        if(pc.y>=npc.y){
            pc.y = 290
        }
       
        if(npc.x > displayWidth-200){
            npc.velocityX = -5
        }
    
        if(npc.x < 190){
            npc.velocityX = 5
        }
        
    
        if(Back.y > displayHeight){
            Back.y = Back.y/2
        }
    
        if(pc.isTouching(obstaclesGroup)){
            gameState = END
        }
        
        spawnObstacles5()
    
      if(keyDown("A")){
            pc.velocityX = -7 
            }
    
      if(keyDown("D")){
            pc.velocityX = 7 
          }
      if(keyDown("W")){
            pc.velocityY = -7 
          }
     if(keyDown("S")){
            pc.velocityY = 7 
          }
    
          spawnLasers();
          spawnLasers2();
          
          drawSprites();
   
   /* if(gameState === END){
        image(GameIMG, displayWidth/2,displayHeight/2, 600, 300);
   }*/
}
//}