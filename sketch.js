function setup() {
  createCanvas(400,400);
  background("#CBA2CB")
  box = createSprite(200,200,30,30);
  box.shapeColor ="black"
}

function draw() 
{
  if (keyIsDown(RIGHT_ARROW)) 
  {
  background ("red")
  }

  if (keyIsDown(LEFT_ARROW)) 
  {
  background("blue");
  }

  if (keyIsDown(UP_ARROW)) 
  {
  background("yellow");
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
  background("green");
  }
  drawSprites();
}