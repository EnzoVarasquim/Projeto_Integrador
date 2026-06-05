let portal;
let fogueira;
let Hailmary2;
let soundtrack;

let mostrarFogueira = false;
let mostrarHailmary = false;

function preload() {
  portal = loadImage('img/portal.jpeg');
  fogueira = loadImage('img/fogueira.gif');
  Hailmary2 = loadImage('img/Hailmary2.gif');
  soundtrack = loadSound('sound/still alive.mp3');
}

function setup() {
  createCanvas(1200, 700);
  soundtrack.loop();
  soundtrack.setVolume(0.5);
}

function draw() {
  background(220);

  image(portal, 0, 0, width, height);

  // portal laranja
  if (mostrarFogueira) {
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.ellipse(220, 350, 135, 190, 0, 0, Math.PI * 2);
    drawingContext.clip();
    image(fogueira, 220 - 135, 350 - 190, 270, 380);
    drawingContext.restore();
  } else {
    fill(255, 110, 30);
    noStroke();
    ellipse(220, 350, 270, 380);
  }

  noFill();
  stroke(255, 110, 30);
  strokeWeight(14);
  ellipse(220, 350, 270, 380);

  // portal azul
  if (mostrarHailmary) {
    drawingContext.save();
    drawingContext.beginPath();
    drawingContext.ellipse(980, 350, 135, 190, 0, 0, Math.PI * 2);
    drawingContext.clip();
    image(Hailmary2, 980 - 135, 350 - 190, 270, 380);
    drawingContext.restore();
  } else {
    fill(30, 140, 255);
    noStroke();
    ellipse(980, 350, 270, 380);
  }

  noFill();
  stroke(30, 140, 255);
  strokeWeight(14);
  ellipse(980, 350, 270, 380);

  stroke(100);
  fill(100);
  rect(-10, height - 80, width, height);

  roboLaranja(400, 460, 0.75);
  roboAzul(800, 500, 0.75);
}

function roboLaranja(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  stroke(20);
  strokeWeight(8);
  fill(255);
  rect(-25, -100, 50, 110, 30);
  fill(255, 180, 0);
  circle(0, -45, 45);
  fill(0);
  circle(0, -45, 15);
  fill(255);
  arc(-35, -55, 40, 40, -200, 200);
  arc(35, -55, 40, 40, -90, 90);
  rect(-30, 10, 60, 80, 20);
  line(-55, -45, -55, 40);
  line(55, -45, 55, 40);
  line(-55, 40, -90, 80);
  circle(-90, 80, 35);
  line(55, 40, 100, 40);
  line(100, 40, 130, 10);
  line(100, 40, 130, 70);
  line(-20, 90, -20, 150);
  line(20, 90, 20, 150);
  rect(-35, 150, 30, 60, 5);
  rect(5, 150, 30, 60, 5);
  pop();
}

function roboAzul(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  stroke(0);
  strokeWeight(7);
  fill(255);
  circle(0, 0, 140);
  rect(-70, -35, 25, 40, 15);
  rect(45, -35, 25, 40, 15);
  rect(-40, 100, 30, 55, 5);
  rect(10, 100, 30, 55, 5);
  noFill();
  circle(0, 0, 140);
  rect(-70, -35, 25, 40, 15);
  rect(45, -35, 25, 40, 15);
  fill(0, 180, 255);
  circle(0, 0, 52);
  fill(0);
  circle(0, 0, 15);
  fill(255);
  line(-65, 0, 65, 0);
  strokeWeight(6);
  point(-32, -12);
  point(-32, 12);
  strokeWeight(7);
  line(-70, 0, -120, 0);
  line(-120, 0, -150, -30);
  circle(-150, -30, 35);
  line(-158, -30, -180, -45);
  line(-158, -30, -180, -15);
  line(70, 0, 110, 0);
  line(110, 0, 110, 50);
  circle(110, 80, 35);
  line(118, 80, 140, 65);
  line(118, 80, 140, 95);
  pop();
}

function mouseClicked() {
  // portal laranja
  if (mouseX > 85 && mouseX < 355 && mouseY > 160 && mouseY < 540) {
    if (!mostrarFogueira) {
      mostrarFogueira = true;
    } else {
      window.location.href = 'index_4.html';
    }
  }

  // portal azul
  if (mouseX > 845 && mouseX < 1115 && mouseY > 160 && mouseY < 540) {
    if (!mostrarHailmary) {
      mostrarHailmary = true;
    } else {
      window.location.href = 'index_5.html';
    }
  }
}