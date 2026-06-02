let posX = 0;
let posY = 0;

let size = 150;

let vitX = 3.123;
let vitY = 5.4321;

let hue = 1; // couleur arc-en-ciel

function keyPressed(){
  if(key === "s"){
    save("dessin.png");
  }
  if(key === "x"){
    background(255);
  }
}

function setup () {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(255);
}

function draw () {

  stroke(hue, 100, 100);
  fill(hue, 100, 100);

  hue += 1;
  if (hue > 360) {
    hue = 0;
  }

  posX += vitX;  
  posY += vitY; 

  if (posX >= width - size || posX <= 0) {
    vitX *= -1;
  }

  if (posY >= height - size || posY <= 0) {
    vitY *= -1;
  }

  square(posX, posY, size);
}