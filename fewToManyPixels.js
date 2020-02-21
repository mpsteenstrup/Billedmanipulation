let img;
let pixelate=1;
function preload(){
  img = loadImage('mpsFull.jpg');
}

function setup(){
  createCanvas(275*2,387);
  noStroke();
}

function draw(){
  image(img,275,0);
    ownFilter();
}

function ownFilter(){
  let pixelSize = int(275/pixelate);
  for (let i=0;i<width/2-pixelSize; i = i+pixelSize){
    for (let j=0;j<height; j = j+pixelSize){
      let c = img.get(i,j);
      fill(c);
      rect(i,j,pixelSize,pixelSize);
    }
  }
}

function mouseClicked() {
    pixelate += 1;
}
