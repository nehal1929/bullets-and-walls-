var bullet, wall
var speed, weight
var thikness
var lbullet,lwall
var wallLeftEdge, wallRightEdge

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thikness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor=("white");

  wall=createSprite(1200, 200, thikness, height/2);
  wall.shapeColor=color(80,80,80);
}
 
function draw() {
  background(0); 


  hasCollided( lbullet , lwall );
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
  var deformation=0.5 * weight * speed * speed /22500;
  if (deformation>180) 
  {
    bullet.shapeColor=(225,0,0);
  }
  if (deformation<180 && deformation>100)  
  {
    bullet.shapeColor=(230,230,0);
  }
  if (deformation<100);
  {
    bullet.shapeColor=(0,255,0);
  }
}

  drawSprites();
}


function hasCollided(lbullet,lwall )
{
bulletRightEdge = lbullet.x + lwall.width;
wallLeftEdge = lwall.x;
if ( bulletRightEdge >= wallLeftEdge)
{
 return true 
}

return false;

}
