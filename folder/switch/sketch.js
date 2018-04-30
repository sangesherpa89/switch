function setup() {
  createCanvas(700, 400, WEBGL); //Create a canvas
  
}
function draw() {
  background(205,211, 226); //sets the color used for the background
  fill(0);
  
  if (mouseIsPressed) { //shows ellipse shape when mouse is pressed
    var c = color(242, 12, 12); // Define color 'c'
    fill(c); // Use color variable 'c' as fill color
    noStroke(); // Don't draw a stroke around shapes
    ellipse(70,90,80,80); //Draw an ellipse

  } else { //Shows rectangle when mouse is not pressed
    var c = color(11, 84, 253); // Define color 'c'
    fill(c); // Use color variable 'c' as fill color
    noStroke(); // Don't draw a stroke around shapes
    rect(40,120,120,40); //Draw a rectangle
  }
  print(mouseIsPressed); //writes to the console area of your browser. 
  }
