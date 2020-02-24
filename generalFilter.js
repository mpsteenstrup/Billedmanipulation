let img;
function preload() {
  img = loadImage('mpsFull.jpg');
}

function setup() {
  w = img.width;
  h = img.height;
  createCanvas(2 * w, h);
  noStroke();
}

function draw() {
  img.loadPixels();
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      fill([getRGBvalue(0,i,j),  getRGBvalue(1,i,j),  getRGBvalue(2,i,j)]);
      rect(i, j, 1, 1);
    }
  }
}

function getRGBvalue(n,i,j){
  c = img.get(i, j)[n];
  return c;
}
