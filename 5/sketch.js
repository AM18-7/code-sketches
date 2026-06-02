let aX = 200;
let aY = 200;
let bX = 100;
let bY = 100;

let vitAX = 3.123;
let vitAY = -5.4321;
let vitBX = -2.234;
let vitBY = 4.21;

let posR = 0;
let posV = 0;
let posB = 0;

let vitR = 1.5;
let vitV = 0.5;
let vitB = 1.3;



function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  //background(220);
  
  stroke(posR, posV, posB);
  
  posR += vitR;
  posV += vitV;
  posB += vitB;

  if( posR >=  255 || posR <= 0 ){ vitR = vitR * -1; }
  if( posV >=  255 || posV <= 0 ){ vitV = vitV * -1; }
  if( posB >=  255 || posB <= 0 ){ vitB = vitB * -1; }
  
  aX += vitAX;
  aY += vitAY;
  bX += vitBX;
  bY += vitBY;

  if( aX >= width  || aX <= 0 ){ vitAX = vitAX * -1; }
  if( aY >= height || aY <= 0 ){ vitAY = vitAY * -1; }
  if( bX >= width  || bX <= 0 ){ vitBX = vitBX * -1; }
  if( bY >= height || bY <= 0 ){ vitBY = vitBY * -1; }

  line(aX, aY, bX, bY);
}


//save
function keyPressed(){
  if( key === "s"){
    save("dessin.png");
  }
}