function setup() {
  frameRate(60);
  createCanvas(300, 300)
  background(204,204,255)
}

var Paul = 1;

function draw() {
  
  //fill(0,0,225)
  noFill()
     
  circle(165,60,Paul);
  circle(235,60,Paul)
  circle(200,100,Paul)
  fill(0,0,225)
  Paul = Paul + 5;
}