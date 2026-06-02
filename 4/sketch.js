function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  strokeWeight(2);
}

function draw() {
  background(10, 10, 25, 40);

  translate(width / 2, height / 2);

  for (let i = 0; i < 20; i++) {
    stroke(100 + i * 8, 150, 255);
    ellipse(0, 0, 100 + i * 30 + sin(frameCount * 0.05 + i) * 50);
  }
}