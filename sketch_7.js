let tijolos = [];
let poster, musica;
let Dia = false;

function preload() {
  poster = loadImage('img/poster.jpg');
  musica = loadSound('sound/the slab.mp3');
}

function setup() {
  createCanvas(1200, 700);
  musica.loop();
  musica.setVolume(0.25);
  for (let i = 0; i < 250; i++) {
    tijolos[i] = [];
    tijolos[i][0] = floor(random(0, 2));
  }
}

function draw() {
  background(0);
  Parede();
  Chao();
  Janela();
  Mesa();
  Cama();
}

function Parede() {
  let largura = 52;
  let altura  = 22;
  let conta   = 0;
  for (let linha = 0; linha < 35; linha++) {
    for (let col = 0; col < 25; col++) {
      let deslocamento = (linha % 2 == 0) ? 0 : largura / 2;
      let x = col * largura - deslocamento;
      let y = linha * altura;
      let v = tijolos[conta % 250][0];
      let b = 34 + v * 8;
      fill(b, b * 0.62, b * 0.52);
      stroke(12, 10, 9);
      strokeWeight(1.5);
      rect(x, y, largura - 1, altura - 1);
      conta++;
    }
  }
  tint(150);
  image(poster, 750, 100, 300, 200);
  noTint();
}

function Chao() {
  noStroke();
  fill(32, 26, 20);
  rect(0, 490, width, height - 490);
  stroke(10, 8, 7);
  strokeWeight(3);
  line(0, 490, width, 490);
}

function Janela() {
  fill(28, 26, 24);
  stroke(14, 12, 10);
  strokeWeight(5);
  rect(420, 20, 220, 130);

  let t = Dia ? 1 : 0;

  let Red   = lerp(8,   80,  t);
  let Green = lerp(10,  140, t);
  let Blue  = lerp(40,  220, t);
  noStroke();
  fill(Red, Green, Blue);
  rect(430, 30, 200, 110);

  if (t > 0.2) {
    let solX = map(t, 0.2, 1, 440, 620);
    let solY = map(t, 0.2, 1, 130, 45);
    fill(255, 210, 50, map(t, 0.2, 0.5, 0, 255));
    noStroke();
    ellipse(solX, solY, 20, 20);
  }

  if (t < 0.4) {
    fill(200, 200, 220, map(t, 0, 0.4, 220, 0));
    noStroke();
    ellipse(438, 42, 2, 2);
    ellipse(460, 62, 2, 2);
    ellipse(488, 38, 2, 2);
    ellipse(518, 70, 2, 2);
    ellipse(548, 48, 2, 2);
    ellipse(580, 74, 2, 2);
    ellipse(445, 95, 2, 2);
    ellipse(570, 105, 2, 2);
  }

  stroke(20, 20, 24);
  strokeWeight(7);
  line(458, 17, 458, 153);
  line(487, 17, 487, 153);
  line(516, 17, 516, 153);
  line(545, 17, 545, 153);
  line(574, 17, 574, 153);
  line(603, 17, 603, 153);
  line(430, 66,  630, 66);
  line(430, 102, 630, 102);
  noFill();
  stroke(10, 10, 13);
  strokeWeight(6);
  rect(420, 20, 220, 130);
}

function Mesa() {
  fill(38, 28, 18);
  stroke(22, 15, 10);
  strokeWeight(2);
  rect(220, 450, 10, 65);
  rect(390, 450, 10, 65);
  fill(34, 25, 16);
  rect(220, 500, 180, 7);
  fill(52, 38, 24);
  stroke(28, 19, 12);
  rect(210, 420, 200, 30);
  fill(44, 32, 20);
  noStroke();
  rect(210, 444, 200, 8);
}

function Cama() {
  fill(48, 36, 22);
  stroke(28, 18, 10);
  strokeWeight(2);
  rect(780, 638, 12, 30);
  rect(1008, 638, 12, 30);
  fill(58, 44, 28);
  stroke(32, 22, 12);
  rect(768, 500, 264, 14);
  rect(768, 635, 264, 14);
  fill(48, 36, 22);
  stroke(28, 18, 10);
  rect(768, 500, 12, 149);
  rect(1020, 500, 12, 149);
  fill(82, 72, 58);
  stroke(55, 46, 36);
  strokeWeight(1);
  rect(780, 514, 240, 121);
}

function mouseClicked() {
  // cama
  if (mouseX > 768 && mouseX < 1032 && mouseY > 500 && mouseY < 668) {
    Dia = !Dia;
  }

  // janela
  if (mouseX > 420 && mouseX < 640 && mouseY > 20 && mouseY < 150) {
    window.location.href = 'index_1.html';
  }
}