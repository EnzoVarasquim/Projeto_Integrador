let backgrounds = [];
let currentBg = 0;
let proximoBg = 0;
let transparencia = 255;
let trocando = false;
let musica;

function preload() {
  backgrounds[0] = loadImage('img/yahargul.jpg');
  backgrounds[1] = loadImage('img/astral.jpg');
  backgrounds[2] = loadImage('img/cainhurst.jpg');
  musica = loadSound('sound/bloodborne.mp3');
}

function setup() {
  createCanvas(1200, 700);
  angleMode(DEGREES);
  musica.loop();
  musica.setVolume(0.5, 0.5);
}

function draw() {
  background(0);

  image(backgrounds[currentBg], 0, 0, width, height);

  if (trocando) {
    tint(255, transparencia);
    image(backgrounds[proximoBg], 0, 0, width, height);
    noTint();

    transparencia += 5;

    if (transparencia >= 255) {
      transparencia = 255;
      currentBg = proximoBg;
      trocando = false;
    }
  }

  push();
  translate(300, 330);
  Bloodborne();
  pop();

  push();
  translate(900, 330);
  Radiance();
  pop();

  Botoes();
}

function Bloodborne() {

  let ponta1x = cos(-90) * 190;
  let ponta1y = sin(-90) * 190;
  let ponta2x = cos(-90 + 72) * 190;
  let ponta2y = sin(-90 + 72) * 190;
  let ponta3x = cos(-90 + 144) * 190;
  let ponta3y = sin(-90 + 144) * 190;
  let ponta4x = cos(-90 + 216) * 190;
  let ponta4y = sin(-90 + 216) * 190;
  let ponta5x = cos(-90 + 288) * 190;
  let ponta5y = sin(-90 + 288) * 190;

  stroke(0, 150, 255);
  strokeWeight(5);
  strokeCap(ROUND);
  line(ponta1x, ponta1y, ponta3x, ponta3y);
  line(ponta3x, ponta3y, ponta5x, ponta5y);
  line(ponta5x, ponta5y, ponta2x, ponta2y);
  line(ponta2x, ponta2y, ponta4x, ponta4y);
  line(ponta4x, ponta4y, ponta1x, ponta1y);

  stroke(255, 200, 40);
  strokeWeight(2);
  fill(0);
  triangle(-57, 0,  57, 0,  0, -30);
  triangle(-57, 0,  57, 0,  0,  30);

  fill(255, 200, 40);
  noStroke();
  for (let i = 0; i < 8; i++) {
    push();
    rotate(i * 45);
    triangle(0, -40,  8, -15,  -8, -15);
    pop();
  }

  ellipse(0, 0, 25, 25);
}


function Radiance() {

  stroke(255, 215, 0);
  noFill();

  strokeWeight(6);
  triangle(0, -220,  160, 180,  -160, 180);

  strokeWeight(3);
  line(0, -220,  0, -25);
  line(0, -150,   64, -20);
  line(0, -150,  -64, -20);

  fill(255, 215, 0);
  noStroke();
  quad(0, -180,  7, -160,  0, -140,  -7, -160);

  stroke(255, 215, 0);
  strokeWeight(5);
  fill(0);
  triangle(-75, -20,  75, -20,   0, -50);
  triangle(-75, -20,  75, -20,   0,  35);

  fill(255, 215, 0);
  noStroke();
  triangle(-12, -22,  12, -22,  0, 8);

  stroke(255, 215, 0);
  strokeWeight(4);
  line(-73, -3,   -145, 177);
  line(-54,  15,  -108, 177);
  line(-36,  25,   -72, 177);
  line(-18,  30,   -36, 177);
  line(  0,  33,     0, 177);
  line( 18,  30,    36, 177);
  line( 36,  25,    72, 177);
  line( 54,  15,   108, 177);
  line( 73, -3,    145, 177);
}

function Botoes() {
  let nomes   = ['altar', 'crypto', 'skyrim'];
  let numeros = ['I', 'II', 'III'];
  let botoesX = [460, 600, 740];
  let botoesY = 630;

  for (let i = 0; i < 3; i++) {

    if (currentBg == i) {
      stroke(180, 100, 255);
      strokeWeight(3);
      fill(180, 100, 255, 60);
      ellipse(botoesX[i], botoesY, 76, 76);

      noStroke();
      fill(180, 100, 255, 100);
      ellipse(botoesX[i], botoesY, 56, 56);

      fill(232, 180, 255);
      textSize(14);

    } else {
      stroke(255, 215, 0);
      strokeWeight(1.5);
      fill(255, 215, 0, 20);
      ellipse(botoesX[i], botoesY, 76, 76);

      fill(255, 215, 0);
      textSize(14);
    }

    noStroke();
    textAlign(CENTER, CENTER);
    text(numeros[i], botoesX[i], botoesY);

    if (currentBg == i) {
      fill(180, 100, 255);
    } else {
      fill(255, 215, 0, 150);
    }
    textSize(12);
    text(nomes[i], botoesX[i], botoesY + 48);
  }
}

function mousePressed() {
  let botoesX = [460, 600, 740];
  for (let i = 0; i < 3; i++) {
    if (dist(mouseX, mouseY, botoesX[i], 630) < 38) {
      if (i != currentBg) {
        proximoBg = i;
        transparencia = 0;
        trocando = true;
      }
      return;
    }
  }

  if (dist(mouseX, mouseY, 300, 330) < 190) {
    window.location.href = "index_2.html";
  }
  if (mouseX > 740 && mouseX < 1060 && mouseY > 130 && mouseY < 530) {
    window.location.href = "index_3.html";
  }
}
