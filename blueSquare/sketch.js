var y = 0
function setup(){
  createCanvas(windowWidth, windowHeight);
   stroke(16, 84, 230);
  fill(103, 178, 224);
  rectMode(CENTER);
 
}

function draw(){
  background(255);
  translate(width/2, height/2);

  rotate(millis()/1000);
  rect(y, y, 300, 300, 30);
  drawingContext.filter = 'blur(30px)';
  
  y = mouseX


}