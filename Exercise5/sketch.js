function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(145,50,90);
  for (var a=0; a<height; a+=50){
    for (var b=0; b<width; b+=400){
  for(var c=0; c<height-20; c+=60){
    for(var d=0; d<height-100; d+=30){

      fill(168,90,50);
     stroke(100,90,60);
      strokeWeight(5);
      line(b,a,width,height);
      stroke(140,100,30);
      ellipse(a,width,200,200);
        noFill();
      stroke(190,90,90);
      ellipse(c,d,50,50);
    }
  }
    }
  }
}