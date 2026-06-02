function setup(){createCanvas(windowWidth,windowHeight);}
function draw(){
  background(0,20);
  translate(width/2,height/2);
  noFill();
  for(let i=0;i<40;i++){
    stroke(255,0,200-i*4);
    ellipse(0,0,i*30+frameCount%30);
  }
}