let img;
function setup() {
  img = loadImage("/Users/kang-in-ah/Downloads/jj.png");
  createCanvas(400, 400);
}

function draw() {
  
image(img, 20, 20, 60, 60);
}
