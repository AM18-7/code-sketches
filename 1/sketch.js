let p=[];
function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i=0;i<200;i++)
    p.push(createVector(width/2,height/2));
}
function draw(){
  background(0,40);
  stroke(0,255,255);
  for(let v of p){
    v.x+=random(-5,5);
    v.y+=random(-5,5);
    point(v.x,v.y);
  }
}