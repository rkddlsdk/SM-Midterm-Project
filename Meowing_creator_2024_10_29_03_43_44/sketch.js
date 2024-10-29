let img;

function preload() {
  img = loadImage('jj.png'); 
}

function setup() {
  createCanvas(500,500);  
  image(img, 0, 10);  
}
