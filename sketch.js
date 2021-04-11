var hr,mn,sec

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  drawSprites();

  hr = hour();
  mn = minute();
  sec = second();

  translate(200, 200);
  rotate(-90)

  secAngle = map(sec, 0, 60, 0, 360);
  push();
  rotate(secAngle);
  stroke(255, 0 ,133);
  strokeWeight(7);
  line(0, 0, 90, 0);
  pop();  
  strokeWeight(10);
  stroke(255,0,133)
  noFill();
  arc(0,0,300,300,0,secAngle);

  mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(mnAngle);
  stroke(135,132,167);
  strokeWeight(7);
  line(0, 0, 80, 0);
  pop();  
  strokeWeight(10);
  stroke(135,132,167)
  noFill();
  arc(0,0,250,250,0,mnAngle);

  hrAngle = map(hr % 12,0,12,0,360);
  push();
  rotate(hrAngle);
  stroke(188,37,208);
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();  
  strokeWeight(10);
  stroke(188,37,208)
  noFill();
  arc(0,0,200,200,0,hrAngle);

}

