let img;
function preload() {
  img = loadImage('billeder/mpsFull.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  noStroke();
  img.loadPixels();
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      fill([theFilter(0,i,j),theFilter(1,i,j),theFilter(2,i,j)])
      rect(i, j, 1, 1);
    }
  }
}

function theFilter(n,i,j){
  c =  0.4*getPixelValue(n,i,j);
  return c;
}


function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
