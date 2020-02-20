let input;
let img;

function setup() {
  createCanvas(400,400);
  input = createFileInput(handleFile);
  input.position(200, 0);
}

function draw() {
  background(255);
  img = createImg('https://p5js.org/assets/img/asterisk-01.png','');
  print(img.get(200,200));
  if (img) {
    image(img,0,0);
    SAVE();
    imgTemp = loadImage('/Users/mpsteenstrup/Downloads/temp.jpg');
    image(imgTemp,100,0);
    noLoop();
  }
}

function SAVE() {
  saveCanvas('temp', 'jpg');
}

function handleFile(file) {
  if (file.type === 'image') {
    img = createImg('https://p5js.org/assets/img/asterisk-01.png','');
    img.hide();
  } else {
    img = null;
  }
}
