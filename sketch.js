var tower, tower_img;
var door_img, doorsGroup;
var cli_img, cliGroup


var ghost_img, ghost;
var bar, barGroup;

var sound;

var play = 1;
var end = 0;
var gameState = play;

function preload(){
  tower_img = loadImage("tower.png");
   door_img = loadImage("door.png");
    cli_img = loadImage("climber.png");
      ghost_img = loadImage("ghost-standing.png");  
          sound =loadSound("spooky.wav");
  
  
  
  
}



function setup() {
  createCanvas(600,600);
  
  tower = createSprite(300,300);
  tower.addImage(tower_img);
  tower.velocityY = 4;
  
  ghost = createSprite(300,300);
  ghost.addImage(ghost_img);
  ghost.scale = 0.3;
  
  
  doorsGroup = new Group();
  cliGroup = new Group();
  barGroup = new Group();
}




function draw() {
  
  background(0);
  sound.play();

  
  
if (gameState === play) {
  
  if (tower.y > 600) {
    tower.y = 300
    
  }
if (keyDown("space")) {
  
  ghost.velocityY = -5;

}
ghost.velocityY += 0.5;
if (keyDown("right")) {
  
ghost.x += 2;
}
if (keyDown("left")) {
  
ghost.x += -2;
}
  if (ghost.isTouching(cliGroup))
{
  ghost.velocityY = 0;
}

  
  
  spawnDoor();
  
  drawSprites();
  
  
if (ghost.isTouching(barGroup) || ghost.y > 600)
{
gameState = end;
}

  

  
}else {
 
  
  textSize(60);
  fill("red");
  stroke ("white");
  text("GAME OVER",100,250); 
  
if (keyDown("r"))
{  
 gameState = play; 
  ghost.x = 300;
  ghost.y = 200;
  doorsGroup.destroyEach();
  cliGroup.destroyEach();
   barGroup.destroyEach();
}
  
}
  
  
  

  
  
}

function spawnDoor()
{
  
if (frameCount % 130 === 0) {
 
 r = Math.round(random(200,400));
   
 door = createSprite(r,0);
  door.addImage(door_img);
  door.velocityY = 4;
  door.lifetime = 150;
  doorsGroup.add(door);
  climber = createSprite(r,50);
  climber.addImage(cli_img);
  climber.velocityY = 4;
  climber.lifetime = 150;
  cliGroup.add(climber);  
  ghost.depth = door.depth +1;
  bar = createSprite(r,70,80,1);
  bar.velocityY = 4;
  bar.lifetime = 150;
  barGroup.add(bar);
  
} 
  

}






