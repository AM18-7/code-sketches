let y=[];
function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i=0;i<300;i++) y[i]=random(height);
}
function draw(){
  background(0,40);
  stroke(0,255,200);
  for(let i=0;i<y.length;i++){
    line(i*5,y[i],i*5,y[i]+20);
    y[i]+=10;
    if(y[i]>height) y[i]=0;
  }
}