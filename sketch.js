//Global
let x = 200;
let y = 200;
let increment = 0.01;
let xPos = 0;
let yPos = 0;
let size = 0.5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  xPos = windowWidth / 150;
  yPos = windowHeight / 150;
}

function draw() {
  push();
  loadPixels();

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let r = random(255);
      pixels[index] = r;
      pixels[index + 1] = r;
      pixels[index + 2] = r;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();

  pop();

  // Dark Rect
  rect;
  push();
  fill(random(70));
  rectMode(CENTER);
  rect(width / 2, height / 2, width - 200, height - 400);
  push();

  //Long Rectangles
  push();
  rect;

  fill(random(150));
  noStroke();
  rectMode(CENTER);
  rect(width / 5, height / 2, width - 2000, height - 400);
  pop();

  //Pink Dimond
  for (let i = 0; i < 20; i++) {
    // squares
    push();
    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(QUARTER_PI);
    stroke("#fc354c");
    noFill();
    strokeWeight(2);

    // scale(mouseY / 100);
    square(xPos, yPos, 37 * i, size);
    // square(frameCount, 100, 10 * i);

    // xPos -= 0.03;
    // yPos -= 0.03;
    size += increment;
    pop();
  }
  //noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
