let img;

// Load the image.
function preload() {
    img = loadImage('billeder/tiger.jpeg'); // Indsæt stien til dit billede her
}

function setup() {
  createCanvas(img.width, img.height); // Opret lærred med billedets dimensioner

  // Display the image.
  image(img, 0, 0);

  // Ensure the image is fully loaded before applying the filter
  
  filter(INVERT);
 

  describe('A blue brick wall.');
}