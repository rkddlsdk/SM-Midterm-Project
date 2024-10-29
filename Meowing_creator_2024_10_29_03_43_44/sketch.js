let img;

function preload() {
  img = loadImage('jj.png'); 
}

  function setup() {
  createCanvas(1280,720);  
  image(img, 0, 0, width, height);  
}

function draw() {
  
  background(0);
  image(img, 0, 0);
}

function mouseMoved() {
  
  console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
}


