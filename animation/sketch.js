var y = 0
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function setup(){
  var cnv = createCanvas(100, 100);
  createCanvas(windowWidth, windowHeight);
   stroke(16, 84, 230);
  fill(103, 178, 224);
  ellipseMode(CENTER);
   cnv.position(0, 0);

}

function draw(){
  background(255);
  translate(windowWidth/2, windowHeight/2);

  rotate(millis()/1000);
  ellipse(y, y, 300, 300, 30);
  drawingContext.filter = 'blur(150px)';
  
  y = mouseX


}