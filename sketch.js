var fixedRect, movingRect;
var jio1,jio2,jio3,jio4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  jio1=createSprite(100,100,50,50);
  jio1.shapeColor="pink";
  jio2=createSprite(200,100,50,50);
  jio2.shapeColor="orange";
  jio3=createSprite(300,100,50,50);
  jio3.shapeColor="yellow";
  jio4=createSprite(400,100,50,50);
  jio4.shapeColor="lightgreen";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(collide(movingRect,jio4)){
    movingRect.shapeColor = "blue";
    jio4.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "purple";
    jio4.shapeColor = "purple";
  }

  drawSprites();
}
