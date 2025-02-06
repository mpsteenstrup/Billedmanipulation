let img;
let blurredImg;

function preload() {
  img = loadImage('billeder/tiger.jpeg'); // Indsæt stien til dit billede her
}

function setup() {
  createCanvas(800, 600);
  image(img, 0, 0);
  blurredImg = createImage(img.width, img.height);
}

function draw() {
  background(255);

  // Beregn blur-styrken baseret på musens position
  let blurAmount = map(mouseX, 0, width, 1, 10);

  // Anvend Gaussisk blur på billedet
  applyGaussianBlur(img, blurredImg, blurAmount);

  // Tegn det blurrede billede
  image(blurredImg, 0, 0);
}

function applyGaussianBlur(srcImg, destImg, blurAmount) {
  let radius = int(blurAmount);
  srcImg.loadPixels();
  destImg.loadPixels();

  let gaussianKernel = createGaussianKernel(radius);

  for (let y = 0; y < srcImg.height; y++) {
    for (let x = 0; x < srcImg.width; x++) {
      let sumR = 0, sumG = 0, sumB = 0, sumA = 0, sumWeight = 0;

      for (let ky = -radius; ky <= radius; ky++) {
        for (let kx = -radius; kx <= radius; kx++) {
          let px = x + kx;
          let py = y + ky;

          if (px >= 0 && px < srcImg.width && py >= 0 && py < srcImg.height) {
            let index = (px + py * srcImg.width) * 4;
            let weight = gaussianKernel[ky + radius][kx + radius];

            sumR += srcImg.pixels[index] * weight;
            sumG += srcImg.pixels[index + 1] * weight;
            sumB += srcImg.pixels[index + 2] * weight;
            sumA += srcImg.pixels[index + 3] * weight;
            sumWeight += weight;
          }
        }
      }

      let index = (x + y * srcImg.width) * 4;
      destImg.pixels[index] = sumR / sumWeight;
      destImg.pixels[index + 1] = sumG / sumWeight;
      destImg.pixels[index + 2] = sumB / sumWeight;
      destImg.pixels[index + 3] = sumA / sumWeight;
    }
  }

  destImg.updatePixels();
}

function createGaussianKernel(radius) {
  let size = radius * 2 + 1;
  let kernel = new Array(size);
  let sigma = radius / 3;
  let sum = 0;

  for (let y = -radius; y <= radius; y++) {
    let row = new Array(size);
    for (let x = -radius; x <= radius; x++) {
      let value = exp(-(x * x + y * y) / (2 * sigma * sigma));
      row[x + radius] = value;
      sum += value;
    }
    kernel[y + radius] = row;
  }

  // Normalize the kernel
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      kernel[y][x] /= sum;
    }
  }

  return kernel;
}
