let img;

function preload() {
  img = loadImage('jj.png'); 
}

  function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0, width, height);  
    
  fill(164, 180, 203);//1번 삼각형 색깔
  noStroke(); //각 도형 테두리없이 
  triangle(583, 149, 674, 164, 590, 209) ; // 1번삼각형
    
  fill(171, 186, 223); //2번 삼각형 색깔
  noStroke(); 
  triangle(671, 119, 583, 149, 676,165); //2번 삼각형
  
  fill(127,161,196); //3번 삼각형 색깔
  noStroke(); 
  triangle (671, 118, 739,126, 675,164); //3번 삼각형
    
  fill(120,153,191); // 
  noStroke(); 
  triangle(739,126,675,164,764,224); // 4번 삼각형

  fill(120,153,191);
  noStroke(); 
  triangle(675,164,760,229,739,125); // 5번 삼각형
  
  fill(106,140,177);
  noStroke(); 
  triangle (825,214,760,229,739,125); //6번 
  
    
  fill(145,179,214);
  noStroke(); 
  triangle (675,164,653,229,760,229);
  
    
  fill(177,192,216);
  noStroke(); 
  triangle (676,163, 591,208,653,229);
  
    
  fill(129,157,187);
  noStroke(); 
  triangle(653,229,592,208,610,274);
  
    
  fill(158,181,213);
  noStroke(); 
  triangle (592,208,546,255,610,273);
  
    
  fill(223,204,188);
  noStroke(); 
  triangle (546,255,610,273,567,315);
  
    
  fill(237,210,196);
  noStroke(); 
  triangle (610,273,567,315,617,335);
  
    
  fill(241,199,182);
  noStroke(); 
  triangle (567,315,617,335, 571,345); 
  
    
  fill(233,199,173);
  noStroke(); 
  triangle (610,273,617,335,673,310);
  
    
  fill(111,138,180);
  noStroke(); 
  triangle(673,310,610,274,653,229);
  
    
  fill(209,171,143);
  noStroke(); 
  triangle (673,310,707,335,644,361);
  
    
  fill(134,164,201);
  noStroke(); 
  beginShape();
  vertex(653, 229); // 첫 번째 점
  vertex(696, 271); // 두 번째 점
  vertex(707, 335); // 세 번째 점
  vertex(673, 310); // 네 번째 점
  endShape(CLOSE);
  
    
  fill(94,136,182);
  noStroke(); 
  triangle (653,229,696,271,754,270);
  
    
  fill(110,145,187);
  noStroke(); 
  triangle (653,229,754,270,760,229);
    
    
  fill(88,118,145);
  noStroke(); 
  triangle (760,229,825,214,818,266);
    
  fill(37,105,160);
  noStroke(); 
  triangle (760,229,818,266,754,270);
  
  fill(38,28,29);
  noStroke(); 
  triangle (754,270,818,266,786,328);//껌정삼각
  
  fill(29,58,88);
  noStroke(); 
  triangle (818,265,848,320,786,328); //y좌표수정
  
  fill(60,108,164);
  noStroke(); 
  triangle (696,271,754,270,786,328);
  
  fill(31,20,29);
  noStroke(); 
  triangle(707, 335 ,696,271,786,328);
  
  fill(31,20,29);
  noStroke(); 
  triangle (786,328,707,335,753,379);
  
  
  
  

    
    

}


function mouseMoved() {
  
  console.log(`Mouse X: ${mouseX}, Mouse Y: ${mouseY}`);
}

