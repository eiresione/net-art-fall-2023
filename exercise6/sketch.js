 
let x = 200;
let y = 200;
var bgcolor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
noStroke();}


function draw() {
  background(bgcolor);
    var grey = map(mouseX,0,width,0,255);
  fill(grey);
  ellipse(mouseX, mouseY, 100, 100);
  strokeWeight(0);
  fill(x);
  rect(100, 100, 150, 150);
strokeWeight(0);
fill(x);
rect(250,250,150,150);
strokeWeight(0);
var d = dist(100,100,mouseX,mouseY);
if (d < 75){
  bgcolor = 255;}
  else { bgcolor = 0;
       
}}


function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = (100,100,10,100);} 
  else if (keyCode === RIGHT_ARROW) {
    x = 0;}
  
  
  if (keyIsDown(UP_ARROW)) {
    y -= 5;}

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;}



  
  
  }