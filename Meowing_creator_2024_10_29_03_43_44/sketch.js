let img;

function preload() {
  img = loadImage('jj.png'); 
}

  function setup() {
  createCanvas(1280,720);  
  image(img, 0, 0, width, height);  


fill(164, 180, 203);
  noStroke(); 
  triangle(583, 149, 674, 164, 590, 209) ;
}

function draw() {
  
}

