function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(0, 10);

  translate(width/2, height/2);

  for (let i = 0; i < 40; i++) {
    let r = i * 20 + frameCount % 20;
    stroke(255, 0, 200 - i*5);
    ellipse(0, 0, r);
  }
}