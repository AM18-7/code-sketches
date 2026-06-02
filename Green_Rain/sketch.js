let blocks = [];

function setup(){
  createCanvas(600,200);

  for(let i=0;i<60;i++){
    blocks.push({x:i*10,y:random(height)});
  }
}

function draw(){
  background(0);

  fill(0,255,200);

  for(let b of blocks){

    rect(b.x,b.y,8,8);

    b.y += random(2,6);

    if(b.y>height) b.y=0;
  }
}