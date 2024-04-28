//Global
let x = 200;
let y = 200;
let increment = 0.006;

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
  // fill(random(70));
  fill(30);
  rectMode(CENTER);
  rect(width / 2, height / 2, width - 200, height - 400);
  pop();

  //Long Rectangles
  push();

  for (let i = 0; i < 5; i++) {
    fill(random(100));
    noStroke();
    rectMode(CENTER);
    rect((i * width) / 5 + width / 10, height / 2, width - 2020, height - 400);
    pop();
  }

  //Pink Dimond
  for (let i = 0; i < 20; i++) {
    // squares
    push();
    rectMode(CENTER);
    translate(width / 2, height / 2);
    rotate(QUARTER_PI);
    stroke("#fc354c");
    noFill();
    strokeWeight(2.5);

    // scale(mouseY / 100);
    square(xPos, yPos, 37 * i, size);
    // square(frameCount, 100, 10 * i);

    // xPos -= 0.03;
    // yPos -= 0.03;
    size += increment;
    pop();
  }

  //Blue Dimond
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 1; j++) {
      // squares
      push();
      rectMode(CORNER);
      translate(width / 2, height / 2);
      // rotate(QUARTER_PI);
      rotate(radians(frameCount / 4));
      stroke("#0abfbc");
      noFill();
      strokeWeight(1);

      // scale(mouseY / 100);
      // square(xPos * i, (frameCount / yPos) * 7, 37 * i, size);
      square(xPos * i, yPos, 3.5 * i, size, 2.5);

      // xPos -= 0.001;
      // yPos -= 0.001;
      size += increment;

      noFill();
      stroke(random(120));
      strokeWeight(1);
      ellipseMode(CENTER);
      ellipse(xPos - width / 50, yPos, 40 * i, 1705);
      pop();
    }
  }

  //noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
