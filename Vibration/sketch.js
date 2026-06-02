let spacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15);
  stroke(0, 255, 200);

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {

      let d = dist(mouseX, mouseY, x, y);
      let offset = map(d, 0, 300, 20, 0, true);

      ellipse(x + random(-offset, offset), 
              y + random(-offset, offset), 
              5);
    }
  }
}