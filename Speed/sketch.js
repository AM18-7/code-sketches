function setup(){createCanvas(windowWidth,windowHeight);}
function draw(){
  background(0);
  for(let i=0;i<20;i++){
    fill(random(255),0,255,80);
    rect(random(width),random(height),random(300),random(20));
  }
}