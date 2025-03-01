//Global
let x = 200;
let y = 200;
let increment = 0.008;

//position and size
let xPos = 0;
let yPos = 0;
let size = 0.5;
// Red Diamond animation / to be mapped
let minSize = 0.5; // Min size of the shape
let maxSize = 17 * 20; // Max size of the shape
let sizeChange = 0.5; // Amount to change the size by

//video section
let videoRed, videoSmoke;
let redStripesPath = "/p5_red.mp4";
let smokePath = "/p5_smoke.mp4";
let w = 700;
let h = 500;

//pre-load videos
function preload() {
  videoRed = createVideo(redStripesPath);
  videoSmoke = createVideo(smokePath);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  xPos = windowWidth / 150;
  yPos = windowHeight / 150;
  //Video Section
  videoArray = [videoRed, videoSmoke];
  // iterate over both videos to loop, mute and hide
  for (let i = 0; i < videoArray.length; i++) {
    videoArray[i].volume(0); // mute
    videoArray[i].hide(); // hide initial video
    videoArray[i].loop(); //loop videos
  }
}

function draw() {
  push();
  loadPixels();
  //Perlin Noise (TV white noise) Section / Background
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

  //video
  push();
  image(videoRed, xPos * 10, yPos * 37, w, h);
  image(videoSmoke, xPos * 85, yPos * 37, w, h);
  pop();

  //Long Rectangles
  push();

  for (let i = 0; i < 5; i++) {
    fill(random(150, 20, 20, 20));
    noStroke();
    rectMode(CENTER);
    rect((i * width) / 5 + width / 10, height / 2, width - 2020, height - 400);
    // pop();
  }
  pop();
  //Pink or Red Dimond
  // for (let i = 0; i < 20; i++) {
  // squares
  push();
  rectMode(CENTER);
  translate(width / 2, height / 2);
  rotate(QUARTER_PI);
  stroke(249, 4, 51, 150);
  noFill();
  strokeWeight(1);

  //mapp the size of shape from min to max using sine function
  let mappedSize = map(sin(frameCount * increment), -1, 1, minSize, maxSize);
  //square(xPos, yPos, mappedSize);
  //calculate the radius for the circles
  let squareRadius = mappedSize / 2;
  // Draw squares inside the shape
  for (let i = 0; i < 200; i++) {
    let angle = map(i, 15, 150, 0, TWO_PI);
    let squareX = xPos + cos(angle) * squareRadius;
    let squareY = yPos + sin(angle) * squareRadius;
    square(squareX, squareY, size);
  }
  // square(xPos, yPos, 17 * i, size);
  //size += increment;
  pop();
  // }

  //Blue Dimond
  for (let i = 0; i < 40; i++) {
    for (let j = 0; j < 1; j++) {
      // squares
      push();
      rectMode(CENTER);
      translate(width / 2, height / 2);
      // rotate(QUARTER_PI / 4);
      rotate(radians(frameCount / 4));
      stroke(210, 210, 210, 220);
      noFill();
      strokeWeight(5);

      // scale(mouseY / 100);
      square(xPos * i, yPos, 4 * j, size);
      // square(xPos, yPos, 18 * i, size);

      // xPos -= 0.001;
      // yPos -= 0.001;
      size += increment;

      //ellipse
      noFill();
      stroke(random(120));
      strokeWeight(1);
      ellipseMode(CENTER);
      ellipse(xPos - width / 50, yPos, 40 * i, 1705);
      pop();
    }
  }

  //Capture images for video
  // saveCanvas("Volumes/LaCie/video/frames", "png");

  // noLoop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
