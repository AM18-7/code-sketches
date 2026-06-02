function setup(){createCanvas(windowWidth,windowHeight,WEBGL);}
function draw(){
  background(0);
  rotateY(frameCount*0.01);
  noFill();
  stroke(0,255,255);
  sphere(200,20,20);
}