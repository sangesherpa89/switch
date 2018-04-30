function setup() {
  createCanvas(700, 400, WEBGL);
  
}
function draw() {
  background(205,211, 226);
  fill(0);
  
  if (mouseIsPressed) {
    var c = color(242, 12, 12); // Define color 'c'
    fill(c); // Use color variable 'c' as fill color
    noStroke(); // Don't draw a stroke around shapes
    ellipse(70,90,80,80); //Draw an ellipse

  } else {
    var c = color(11, 84, 253); // Define color 'c'
    fill(c); // Use color variable 'c' as fill color
    noStroke(); // Don't draw a stroke around shapes
    rect(85,85,90,80); //Draw a rectangle
  }
  print(mouseIsPressed);
  }