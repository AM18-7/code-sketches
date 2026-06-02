let dots=[];

function setup(){
  createCanvas(500,200);

  for(let i=0;i<200;i++){
    dots.push({
      x:random(width),
      y:random(height),
      s:random(2,6)
    });
  }
}

function draw(){
  background(0);

  fill(0,255,180);
  noStroke();

  for(let d of dots){
    ellipse(d.x,d.y,d.s);
    d.y+=random(-1,1);
  }
}