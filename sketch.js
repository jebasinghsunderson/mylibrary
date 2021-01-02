var fixedbox,movingbox;
var box1,box2,box3;
function setup() {
  createCanvas(800,800);
  fixedbox = createSprite(400, 200, 50, 50);
  fixedbox.shapeColor = "red";
  movingbox = createSprite(400, 700, 80, 30);
  movingbox.shapeColor = "red";
  box1 = createSprite(100,600,80,80);
  box1.shapeColor = "red"
  box2 = createSprite(300,600,80,80);
  box2.shapeColor = "red"
  box3 = createSprite(500,600,80,80);
  box3.shapeColor = "red"

// movingbox.velocityX = -5;
// fixedbox.velocityX = 5;
movingbox.velocityY = -5;
fixedbox.velocityY =  5;
}

function draw() {

  background(0);  
 // movingbox.x = mouseX;
 // movingbox.y = mouseY;
 if (isTouching(movingbox,box2)){
  box2.shapeColor = "green";
  movingbox.shapeColor = "green";
}
else {
  box2.shapeColor = "red";
  movingbox.shapeColor = "red";
}
var edge=createEdgeSprites();
movingbox.bounceOff(edge);
fixedbox.bounceOff(edge);
bounceOff(movingbox,fixedbox)
       drawSprites();

}

