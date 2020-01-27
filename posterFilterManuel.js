let img;

function preload() {
  img = loadImage('mpsFull.jpg');
}

function setup() {
  w = 275;
  h = 387;
  createCanvas(2 * w, h);
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i = i+1) {
    for (let j = 0; j < h; j = j+1){
      let c = img.get(i, j);
      for (let k=0;k<3;k+=1){
        if (c[k]>127){
          c[k]=255;
        }
        else{
          c[k]=0;
        }
      }
      fill(c[0],c[1],c[2]);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}
