let t = 0;
let showText = false;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont('Arial');
}

function draw() {
  background(0);
  ambientLight(80);
  directionalLight(255, 255, 255, 0, -1, -1);

  // Camera zoom
  let camZ = lerp(600, 300, min(t / 120, 1));
  camera(0, 0, camZ, 0, 0, 0, 0, 1, 0);

  rotateY(t * 0.03);
  rotateX(t * 0.02);

  // Cube violet
  push();
  fill(120, 0, 255);
  box(150);
  pop();

  // Petit cube satellite
  push();
  rotateY(t * 0.05);
  translate(200, 0, 0);
  fill(200);
  box(40);
  pop();

  t++;

  if (t > 120) showText = true;

  // Texte
  if (showText) {
    resetMatrix();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("GAMECUBE STYLE", width / 2, height / 2 + 150);
  }

  // Fade out
  if (t > 300) {
    resetMatrix();
    fill(0, map(t, 300, 360, 0, 255));
    rect(0, 0, width, height);
  }
}