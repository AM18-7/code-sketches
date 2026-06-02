let drops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 400; i++) {
    drops.push(new Drop());
  }
  background(0);
}

function draw() {
  fill(0, 25);
  rect(0, 0, width, height);

  for (let d of drops) {
    d.fall();
    d.show();
  }
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-height, 0);
    this.z = random(0, 20);
    this.len = map(this.z, 0, 20, 10, 25);
    this.speed = map(this.z, 0, 20, 2, 10);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.speed = map(this.z, 0, 20, 2, 10);
    }
  }

  show() {
    stroke(0, 255, 180);
    strokeWeight(map(this.z, 0, 20, 1, 3));
    line(this.x, this.y, this.x, this.y + this.len);
  }
}