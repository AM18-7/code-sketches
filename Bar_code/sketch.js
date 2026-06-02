function setup(){createCanvas(windowWidth,windowHeight);}
function draw(){
  background(0);
  stroke(0,255,180);
  for(let i=0;i<200;i++){
    let x=random(width);
    line(x,0,x,height);
  }
}