let img, keyImg;

function preload() {
  keyImg = loadImage('billeder/pixels.png'); // Nøgle billede
  img = loadImage('billeder/tiger.jpeg'); // Original billede
}

function setup() {
  createCanvas(4 * img.width, img.height);
  noStroke();
  pixelDensity(1);
  img.loadPixels();
  keyImg.loadPixels();
}

function draw() {
  let encryptedImg = createImage(img.width, img.height);
  let decryptedImg = createImage(img.width, img.height);

  encryptedImg.loadPixels();
  decryptedImg.loadPixels();

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let imgColor = img.get(i, j);
      let keyColor = keyImg.get(i, j);

      let encryptedColor = encryptPixel(imgColor, keyColor);
      let decryptedColor = decryptPixel(encryptedColor, keyColor);

      encryptedImg.set(i, j, encryptedColor);
      decryptedImg.set(i, j, decryptedColor);
    }
  }

  encryptedImg.updatePixels();
  decryptedImg.updatePixels();

  image(img, 0, 0); // Original billede
  image(keyImg,img.width,0)
  image(encryptedImg, 2*img.width, 0); // Krypteret billede
  image(decryptedImg, 3* img.width, 0); // Dekrypteret billede

  encryptedImg.save('encrypted_image', 'png');

  noLoop();
}

function encryptPixel(imgColor, keyColor) {
  return color(
    (red(imgColor) + red(keyColor)) % 255,
    (green(imgColor) + green(keyColor)) % 255,
    (blue(imgColor) + blue(keyColor)) % 255
  );
}

function decryptPixel(encryptedColor, keyColor) {
  return color(
    (red(encryptedColor) - red(keyColor) + 255) % 255,
    (green(encryptedColor) - green(keyColor) + 255) % 255,
    (blue(encryptedColor) - blue(keyColor) + 255) % 255
  );
}
