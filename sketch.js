var fixedRect, movingRect;
var ball1, ball2;

function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect2 = createSprite(100, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;

  ball1 = createSprite(0, 0, 10, 10);
  ball1.velocityX = 2;
  ball1.velocityY = 2;
  ball1.shapeColor = "blue";

  ball2 = createSprite(800,800, 10, 10);
  ball2.velocityX = -2;
  ball2.velocityY = -2;
  ball2.shapeColor = "orange";

}

function draw() {
  background(0,0,0);  
  bounceBalls(ball1,ball2);

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}else if(isTouching(movingRect,fixedRect2)){
  movingRect.shapeColor = "yellow";
  fixedRect2.shapeColor = "yellow";
}else{
  movingRect.shapeColor = "green";
  fixedRect2.shapeColor = "green";
  fixedRect.shapeColor = "green";

}

  drawSprites();
}
