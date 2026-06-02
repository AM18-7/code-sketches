let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 500; i++) {
    particles.push(new Particle());
  }
  background(0);
}

function draw() {
  fill(0, 10);
  noStroke();
  rect(0, 0, width, height);

  for (let p of particles) {
    p.update();
    p.show();
  }
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
  }

  update() {
    let angle = noise(this.pos.x * 0.005, this.pos.y * 0.005) * TWO_PI * 4;
    this.vel = p5.Vector.fromAngle(angle);
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  show() {
    stroke(0, 150, 255, 100);
    strokeWeight(1);
    point(this.pos.x, this.pos.y);
  }
}