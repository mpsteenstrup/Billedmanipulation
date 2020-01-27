let img;
let farve = [0,0,0];
function preload() {
  img = loadImage('mps.jpg');
}

function setup() {
  w = 188;
  h = 242;
  createCanvas(2 * w, h);
}

function draw() {
  ownFilter();
  image(img, w, 0);
  noLoop();
}

function ownFilter() {
  for (let i = 0; i < w; i += 1) {
    for (let j = 0; j < h; j += 1) {
      r = 0; b = 0; g = 0;
      for (let k=-1;k<1;k+=1){
        c = img.get(i+k,j);
        r = r+c[0]; g= g+c[1]; b=b+c[2];
        }
      farve = [r/3,g/3,b/3];
      fill(farve);
      noStroke();
      rect(i, j, 1, 1);
    }
  }
}
