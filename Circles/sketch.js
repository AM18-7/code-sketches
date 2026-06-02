function setup(){
  createCanvas(400,400);
}

function draw(){
  background(0);

  translate(width/2,height/2);

  noFill();

  for(let r=40;r<200;r+=20){
    stroke(0,255,200);
    ellipse(0,0,r + random(-10,10));
  }
}