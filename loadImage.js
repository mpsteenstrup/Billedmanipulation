let input;
let img;

function setup() {
  createCanvas(400,400);
  input = createFileInput(handleFile);
  input.position(200, 0);
}

function draw() {
  background(255);
  if (img) {
    image(img, img.width/2, 0);
    print(img.width);
    noLoop();
  }
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data);
  } else {
    img = null;
  }
}
