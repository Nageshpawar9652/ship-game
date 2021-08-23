var ship, ship_moving;
var seaImg, invisiblesea 
function preload(){
ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImg = loadImage("sea.png")
}

function setup(){

//create groundsprite
sea = createSprite(200,180,40,40);
sea.addImage("sea",seaImg);
sea.x = sea.width/2;
sea.velocityX = -4;
invisiblesea = createSprite(200,0,400,50);
invisiblesea.visible = false

createCanvas(1500,600);
ship = createSprite(200,200,10,10);
ship.addAnimation("moving",ship_moving);
ship.scale = 0.5;
}

function draw() {
  background("blue");
  if(sea.x < 0){
    sea.x = sea.width/2
  }
 drawSprites()
}