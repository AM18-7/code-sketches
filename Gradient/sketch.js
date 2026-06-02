function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Base gradient
  for (let y = 0; y < height; y++) {
    stroke(0, y*0.3, 255);
    line(0, y, width, y);
  }

  // RGB glitch slices
  for (let i = 0; i < 20; i++) {
    let y = random(height);
    let h = random(5, 30);
    let offset = random(-50, 50);

    copy(0, y, width, h, offset, y, width, h);
  }

  // Scanlines
  stroke(0, 0, 0, 80);
  for (let y = 0; y < height; y += 3) {
    line(0, y, width, y);
  }
}