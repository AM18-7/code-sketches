

// Bouncy Object
let bouncy = {
 
 size: 64,
 posX: 10,
 posY: 15,
 vitX: 1.2,
 vitY: 0.9,
 name: "Bouncy Thing",
 r: 0,
 g: 100,
 b: 200,
 
 bouger: function(){
  this.posX = this.posX + this.vitX;
  this.posY += this.vitY;
 },
 
 rebondir: function(){
  if(this.posX + this.size > width || this.posX < 0){
   this.vitX = this.vitX * -1;
  }
  if(this.posY + this.size > height || this.posY < 0){
   this.vitY *= -1;
  }
 },
 
 dessiner: function(){
  //noFill();
  fill(this.r, this.g, this.b, 66);
  stroke(this.r, this.g, this.b);
  strokeWeight(1);
  rect(this.posX, this.posY, this.size, this.size*0.67 );
  
  logo.loadPixels();
  for (let i = 0; i < logo.pixels.length; i += 4) {
   logo.pixels[i + 0] = this.r; // Red.
   logo.pixels[i + 1] = this.g; // Green.
   logo.pixels[i + 2] = this.b; // Blue.
  }
  
  logo.updatePixels();
  
  image(logo, this.posX, this.posY, this.size, this.size*0.67 );
  
  noStroke();
  fill(this.r-100, this.g-100, this.b-100, 33);
  text(this.name, this.posX, this.posY -4);
 },
 
 update: function(){
  this.bouger();
  this.rebondir();
  this.dessiner();
 } // fin de update
 
}; // end bouncy object



let chaton = Object.create(bouncy);
chaton.name = "Fuzzy Kitten";
chaton.vitX = 1.5;
chaton.r = 200;

let machin = Object.create(bouncy);
machin.name = "Bouncy McBounceFace";
machin.vitY = -2;
machin.g = 200;

function setup() {
 createCanvas(400, 400);

}

let logo;
function preload() {
 logo = loadImage('dvd.png');
}

function draw() {
 background(220);

 bouncy.update();
 chaton.update();
 machin.update();
}