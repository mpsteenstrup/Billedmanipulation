let img;
let button;

function preload(){
  img = loadImage('mpsFull.jpg');
}

function setup() {
createCanvas(400,400);
background(255, 0, 0);
button = createButton('Save Image');
button.position(19, 19);
button.mousePressed(changeBG);
}

function draw(){
  image(img,0,0,400,400);
  filter(POSTERIZE,3);
  noLoop();
}
function changeBG() {
  saveCanvas('myCanvas', 'jpg');
}