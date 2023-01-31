function setup() {
 createCanvas(800, 300);
 background(72, 72, 187);
 rectMode(CENTER);
}


function draw() {
  //rectangle 
  fill (227,57,41);
  strokeWeight(2);
  stroke(75);
  rect(400, 150, 100, 100);

  //left circle
  fill (41,228,57);
  strokeWeight(2);
  stroke(75);
  ellipse(300, 150, 100, 100);
  
  //right circle 
  fill (218,228,41);
  strokeWeight(2);
  stroke(75);
  ellipse(500, 150, 100, 100);
  
  // circle 01
 fill(51, 51, 51);
 strokeWeight(2);
 stroke(75);
 ellipse(100, 130, 200, 200);
  
 // circle 02
 stroke(0);
 fill(255, 53, 139);
 ellipse(100, 130, 175, 175);
  
  // circle 03
 fill(1, 176, 240);
 ellipse(100, 130, 150, 150);
  
 // circle 04
 fill(174, 238, 0);
 ellipse(100, 130, 100, 100);

   // circle 01
 fill(51, 51, 51);
 strokeWeight(2);
 stroke(75);
 ellipse(700, 130, 200, 200);
  
 // circle 02
 stroke(0);
 fill(255, 53, 139);
 ellipse(700, 130, 175, 175);
  
  // circle 03
 fill(1, 176, 240);
 ellipse(700, 130, 150, 150);
  
 // circle 04
 fill(174, 238, 0);
 ellipse(700, 130, 100, 100);
  
  

var offset = (10*25)
 ellipse(100 + offset, 270, 50, 50); // left wheel
 ellipse(200 + offset, 270, 50, 50); // right wheel
 rect(145 + offset, 250, 200, 20) // cart
}