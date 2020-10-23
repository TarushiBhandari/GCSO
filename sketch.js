var car,carImg;
var greenImg,yellowImg,redImg;
var wall;
var speed;
var weight;

function preload(){
  carImg= loadImage("pink car.png");
  greenImg= loadImage("green car.png");
  yellowImg= loadImage("yellow car.gif");
  redImg= loadImage("red car.png");
}

function setup() {
  createCanvas(1600,400);

speed= random(55,90);
weight= random(400,1500);

car= createSprite(50,200,40,40);
car.velocityX= speed;
car.addImage(carImg);
car.scale= 0.3;


wall= createSprite(1500,200,50,height/2);
wall.shapeColor= "pink";

}

function draw() {
  background("white");  

if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX= 0;
  var deformation= 0.5*weight*speed*speed/22509;

  if(deformation>180){
   car.addImage(redImg);
   car.scale= 0.3;
  }
  if(deformation<180 && deformation>100){
    car.addImage(greenImg);
    car.scale= 0.3;
  }
  if(deformation<100){
    car.addImage(yellowImg);
    car.scale= 0.3;
  }
}

  drawSprites();
}