var y = 0
function setup(){
  createCanvas(windowWidth, windowHeight);
  stroke(16, 84, 230);
  fill(103, 178, 224);
  ellipseMode(CENTER);
  canvas.position(0,0);
  canvas.style('z-index','-1');
 
}

function draw(){
  background(255);
  translate(windowWidth/2, windowHeight/2);

  rotate(millis()/1000);
  ellipse(y, y, 300, 300, 30);
  drawingContext.filter = 'blur(150px)';
  
  y = mouseX


}
