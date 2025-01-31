let img, bgImg;

function preload() {
  img = loadImage('billeder/mps.jpg'); // Foreground image with green screen
  bgImg = loadImage('billeder/tiger.jpeg'); // Background image
}

function setup() {
  createCanvas(img.width, img.height);
  noStroke();
  pixelDensity(1);
  img.loadPixels();
  bgImg.loadPixels();
}

function draw() {
  let resultImg = createImage(img.width, img.height);
  resultImg.loadPixels();

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let imgColor = img.get(i, j);
      let bgColor = bgImg.get(i, j);

      if (isGreen(imgColor)) {
        resultImg.set(i, j, bgColor); // Replace green with background
      } else {
        resultImg.set(i, j, imgColor); // Keep original pixel
      }
    }
  }

  resultImg.updatePixels();
  image(resultImg, 0, 0);
  noLoop();
}

function isGreen(color) {
  let r = red(color);
  let g = green(color);
  let b = blue(color);
// nok nærmere en whitescreen
  return g > 220 && r > 220 && b > 220; // Simple threshold for detecting green
}
