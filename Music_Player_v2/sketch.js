let peaks = [];

function setup() {
  createCanvas(800,300);
  for(let i=0;i<30;i++) peaks[i]=0;
}

function draw(){
  background(0);
  
  let w = width/peaks.length;

  for(let i=0;i<peaks.length;i++){
    
    let level = random(height);

    peaks[i] = max(level, peaks[i]-3);

    fill(0,255,200);
    rect(i*w,height-level,w-4,level);

    fill(255,50,50);
    rect(i*w,height-peaks[i],w-4,4);
  }
}