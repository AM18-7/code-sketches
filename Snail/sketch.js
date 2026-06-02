function setup(){createCanvas(windowWidth,windowHeight);}
function draw(){
  background(0);
  translate(width/2,height/2);
  noFill();
  stroke(255,0,200);
  beginShape();
  for(let a=0;a<10;a+=0.1){
    let r=a*20;
    vertex(r*cos(a+frameCount*0.05),r*sin(a+frameCount*0.05));
  }
  endShape();
}