// virker ikke helt

let img;

function preload() {
  img = loadImage('hemmelig.jpg');
}

function setup() {
  w = 960;
  h = 720;
  createCanvas(w, h);
}

function draw() {
  colorFilter();
//  image(img, 0, 0);
  noLoop();
}

function colorFilter() {
  for (let i = 0; i < w; i = i+1) {
    for (let j = 0; j < h; j = j+1){
      let c = img.get(i, j);

        if (c[2]>127){
          c[2]=255;
        }
        else{
          c[2]=0;
        }
      fill(c[2]);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}
