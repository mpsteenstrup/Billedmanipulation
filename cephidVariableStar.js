let x1 = 5;
let x2 = 10;
let x3 = 10;
let c1 = 2;
let c2 = 0.1;
let c3 = 0.05;

function setup(){
createCanvas(windowWidth, windowHeight);
background(0);
frameRate(40);
}



function draw(){
  background(0);
fill(55+x1);
ellipse(200,200,8,8);
 x1 = x1 +c1;
 if (x1>100 || x1<2){
   c1 = -c1;
 }
 fill(150 +c2);
ellipse(300,300,8,8);
  x2 = x2;
  if (x2>105 || x2<5){
    c2 = -c2;
  }

  fill(100+c3);
  ellipse(600,400,8,8);
    x3 = x3;
    if (x3>100 || x3<5){
      c3 = -c3;
    }





}
