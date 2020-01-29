let input;
let img;

function setup() {
  createCanvas(400,400);
  input = createFileInput(handleFile);
  input.position(0, 0);
}

function draw() {
  background(255);
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {
    img = createImg(file.data,'');
    img.hide();
  } else {
    img = null;
  }
}
