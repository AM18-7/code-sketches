let msg = "I LOVE CODING";
let x;

function setup(){
  createCanvas(700,150);
  x = width;
  textSize(32);
}

function draw(){
  background(0);

  fill(0,255,180);
  text(msg,x,80);

  x -= 3;

  if(x < -textWidth(msg))
    x = width;
}