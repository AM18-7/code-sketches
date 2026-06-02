function setup(){
  createCanvas(400,400);
}

function draw(){
  background(0);
  translate(width/2,height/2);

  stroke(0,255,200);
  noFill();

  for(let a=0;a<TWO_PI;a+=0.1){
    let r = 100 + random(-40,40);
    line(0,0,r*cos(a),r*sin(a));
  }
}