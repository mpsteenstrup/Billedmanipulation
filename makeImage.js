// virker ikke

let img = createImg(66, 66);
img.loadPixels();
for (let i = 0; i < img.width; i++) {
  for (let j = 0; j < img.height; j++) {
    img.set(i, j, color(0, 90, 102));
  }
}
img.updatePixels();
image(img, 17, 17);
