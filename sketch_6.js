let nublado, musica;
let chuva = [];
let jumpscareAtivo = false;
let jumpscareFrame = 0;
let friend;

function preload() {
  nublado = loadImage('img/nublado.jpeg');
  musica = loadSound('sound/glaceir.mp3');
  friend = loadSound('sound/friend.mp3');
}

function setup() {
  createCanvas(1200, 700);
  musica.loop();
  musica.setVolume(0.2);

  for (let i = 0; i < 200; i++) {
    chuva[i] = [];
    chuva[i][0] = random(1200);
    chuva[i][1] = random(700);
    chuva[i][2] = random(1, 5);
  }
}

function draw() {
  background(220);
  image(nublado, 0, 0, 1200, 450);
  noStroke();
  fill(54, 43, 36);
  rect(0, 450, 1200, 250);

  // ÁRVORE 
  stroke(45, 30, 20);
  strokeWeight(10);
  line(150, 455, 150, 225);
  strokeWeight(4);
  line(150, 235, 133, 214);
  line(150, 235, 167, 211);
  line(150, 255, 139, 233);
  line(150, 255, 161, 229);
  line(150, 275, 142, 253);
  line(150, 275, 158, 249);
  strokeWeight(2);
  line(133, 214, 129, 197);
  line(133, 214, 139, 195);
  line(167, 211, 161, 194);
  line(167, 211, 172, 196);
  line(139, 233, 135, 220);
  line(161, 229, 165, 216);

  // ÁRVORE 
  strokeWeight(10);
  line(350, 452, 350, 222);
  strokeWeight(4);
  line(350, 232, 333, 211);
  line(350, 232, 367, 208);
  line(350, 252, 339, 230);
  line(350, 252, 361, 226);
  line(350, 272, 342, 250);
  line(350, 272, 358, 246);
  strokeWeight(2);
  line(333, 211, 329, 194);
  line(333, 211, 339, 192);
  line(367, 208, 361, 191);
  line(367, 208, 372, 193);
  line(339, 230, 335, 217);
  line(361, 226, 365, 213);

  // ÁRVORE 
  strokeWeight(10);
  line(560, 454, 560, 224);
  strokeWeight(4);
  line(560, 234, 543, 213);
  line(560, 234, 577, 210);
  line(560, 254, 549, 232);
  line(560, 254, 571, 228);
  line(560, 274, 552, 252);
  line(560, 274, 568, 248);
  strokeWeight(2);
  line(543, 213, 539, 196);
  line(543, 213, 549, 194);
  line(577, 210, 571, 193);
  line(577, 210, 582, 195);
  line(549, 232, 545, 219);
  line(571, 228, 575, 215);

  // ÁRVORE 
  strokeWeight(10);
  line(760, 452, 760, 222);
  strokeWeight(4);
  line(760, 232, 743, 211);
  line(760, 232, 777, 208);
  line(760, 252, 749, 230);
  line(760, 252, 771, 226);
  line(760, 272, 752, 250);
  line(760, 272, 768, 246);
  strokeWeight(2);
  line(743, 211, 739, 194);
  line(743, 211, 749, 192);
  line(777, 208, 771, 191);
  line(777, 208, 782, 193);
  line(749, 230, 745, 217);
  line(771, 226, 775, 213);

  // ÁRVORE 
  strokeWeight(10);
  line(980, 455, 980, 225);
  strokeWeight(4);
  line(980, 235, 963, 214);
  line(980, 235, 997, 211);
  line(980, 255, 969, 233);
  line(980, 255, 991, 229);
  line(980, 275, 972, 253);
  line(980, 275, 988, 249);
  strokeWeight(2);
  line(963, 214, 959, 197);
  line(963, 214, 969, 195);
  line(997, 211, 991, 194);
  line(997, 211, 1002, 196);
  line(969, 233, 965, 220);
  line(991, 229, 995, 216);

  // ÁRVORE 
  strokeWeight(10);
  line(1100, 453, 1100, 223);
  strokeWeight(4);
  line(1100, 233, 1083, 212);
  line(1100, 233, 1117, 209);
  line(1100, 253, 1089, 231);
  line(1100, 253, 1111, 227);
  line(1100, 273, 1092, 251);
  line(1100, 273, 1108, 247);
  strokeWeight(2);
  line(1083, 212, 1079, 195);
  line(1083, 212, 1089, 193);
  line(1117, 209, 1111, 192);
  line(1117, 209, 1122, 194);
  line(1089, 231, 1085, 218);
  line(1111, 227, 1115, 214);

  // ÁRVORE 
  strokeWeight(13);
  line(250, 462, 250, 232);
  strokeWeight(6);
  line(250, 242, 233, 221);
  line(250, 242, 267, 218);
  line(250, 262, 239, 240);
  line(250, 262, 261, 236);
  line(250, 282, 242, 260);
  line(250, 282, 258, 256);
  strokeWeight(3);
  line(233, 221, 229, 204);
  line(233, 221, 239, 202);
  line(267, 218, 261, 201);
  line(267, 218, 272, 203);
  line(239, 240, 235, 227);
  line(261, 236, 265, 223);

  // ÁRVORE 
  strokeWeight(13);
  line(480, 465, 480, 235);
  strokeWeight(6);
  line(480, 245, 463, 224);
  line(480, 245, 497, 221);
  line(480, 265, 469, 243);
  line(480, 265, 491, 239);
  line(480, 285, 472, 263);
  line(480, 285, 488, 259);
  strokeWeight(3);
  line(463, 224, 459, 207);
  line(463, 224, 469, 205);
  line(497, 221, 491, 204);
  line(497, 221, 502, 206);
  line(469, 243, 465, 230);
  line(491, 239, 495, 226);

  // ÁRVORE 
  strokeWeight(13);
  line(870, 462, 870, 232);
  strokeWeight(6);
  line(870, 242, 853, 221);
  line(870, 242, 887, 218);
  line(870, 262, 859, 240);
  line(870, 262, 881, 236);
  line(870, 282, 862, 260);
  line(870, 282, 878, 256);
  strokeWeight(3);
  line(853, 221, 849, 204);
  line(853, 221, 859, 202);
  line(887, 218, 881, 201);
  line(887, 218, 892, 203);
  line(859, 240, 855, 227);
  line(881, 236, 885, 223);

  // ÁRVORE 
  strokeWeight(16);
  line(80, 472, 80, 242);
  strokeWeight(7);
  line(80, 252, 63, 231);
  line(80, 252, 97, 228);
  line(80, 272, 69, 250);
  line(80, 272, 91, 246);
  line(80, 292, 72, 270);
  line(80, 292, 88, 266);
  strokeWeight(4);
  line(63, 231, 59, 214);
  line(63, 231, 69, 212);
  line(97, 228, 91, 211);
  line(97, 228, 102, 213);
  line(69, 250, 65, 237);
  line(91, 246, 95, 233);

  // ÁRVORE 
  stroke(45, 30, 20);
  strokeWeight(18);
  line(380, 475, 380, 245);
  strokeWeight(8);
  line(380, 255, 350, 205);
  line(380, 255, 410, 195);
  line(380, 295, 360, 245);
  line(380, 295, 400, 235);
  line(380, 335, 365, 285);
  line(380, 335, 395, 275);
  strokeWeight(4);
  line(350, 205, 340, 175);
  line(350, 205, 360, 180);
  line(410, 195, 400, 165);
  line(410, 195, 420, 170);
  line(360, 245, 350, 220);
  line(400, 235, 410, 210);

  // ÁRVORE 
  strokeWeight(18);
  line(600, 478, 600, 248);
  strokeWeight(8);
  line(600, 258, 570, 208);
  line(600, 258, 630, 198);
  line(600, 298, 580, 248);
  line(600, 298, 620, 238);
  line(600, 338, 585, 288);
  line(600, 338, 615, 278);
  strokeWeight(4);
  line(570, 208, 560, 178);
  line(570, 208, 580, 183);
  line(630, 198, 620, 168);
  line(630, 198, 640, 173);
  line(580, 248, 570, 223);
  line(620, 238, 630, 213);

  // ÁRVORE 
  strokeWeight(18);
  line(820, 475, 820, 245);
  strokeWeight(8);
  line(820, 255, 790, 205);
  line(820, 255, 850, 195);
  line(820, 295, 800, 245);
  line(820, 295, 840, 235);
  line(820, 335, 805, 285);
  line(820, 335, 835, 275);
  strokeWeight(4);
  line(790, 205, 780, 175);
  line(790, 205, 800, 180);
  line(850, 195, 840, 165);
  line(850, 195, 860, 170);
  line(800, 245, 790, 220);
  line(840, 235, 850, 210);

  // ÁRVORE 
  strokeWeight(16);
  line(1080, 472, 1080, 242);
  strokeWeight(7);
  line(1080, 252, 1050, 202);
  line(1080, 252, 1110, 192);
  line(1080, 292, 1060, 242);
  line(1080, 292, 1100, 232);
  line(1080, 332, 1065, 282);
  line(1080, 332, 1095, 272);
  strokeWeight(4);
  line(1050, 202, 1040, 172);
  line(1050, 202, 1060, 177);
  line(1110, 192, 1100, 162);
  line(1110, 192, 1120, 167);
  line(1060, 242, 1050, 217);
  line(1100, 232, 1110, 207);

  // LÁPIDE
  Lapide();

  // CHUVA
  for (let i = 0; i < 200; i++) {
    let vel = map(chuva[i][2], 1, 5, 4, 16);
    let esp = map(chuva[i][2], 1, 5, 0.5, 2);
    let tam = map(chuva[i][2], 1, 5, 8, 28);
    stroke(20, 20, 30, map(chuva[i][2], 1, 5, 80, 200));
    strokeWeight(esp);
    line(
      chuva[i][0],
      chuva[i][1],
      chuva[i][0] + tam * 0.2,
      chuva[i][1] + tam
    );
    chuva[i][1] += vel;
    chuva[i][0] += vel * 0.2;
    if (chuva[i][1] > 700) {
      chuva[i][1] = random(-40, -5);
      chuva[i][0] = random(1200);
    }
  }

  // FANTASMA 
  let escala = 1;
  if (jumpscareAtivo) {
    jumpscareFrame++;
    if (jumpscareFrame <= 30) {
      escala = map(jumpscareFrame, 0, 30, 1, 12);
    } else {
      jumpscareAtivo = false;
      jumpscareFrame = 0;
    }
  }

  push();
  translate(355, 382);
  scale(escala);
  translate(-355, -382);
  noStroke();

  //corpo
  fill(30, 30, 30, 210);
  circle(355, 340, 50);
  ellipse(355, 400, 55, 100);

  //olhos
  fill(255);
  circle(343, 337, 12);
  circle(367, 337, 12);

  pop();

  desenharFiltro();
}

function Lapide() {
  fill(90, 85, 80);
  stroke(55, 50, 45);
  strokeWeight(2);
  rect(1028, 390, 45, 60);
  arc(1050, 390, 45, 40, PI, 0);
  fill(65, 60, 55);
  noStroke();
  rect(1047, 398, 5, 25);
  rect(1038, 407, 23, 5);
}

function desenharFiltro() {
  fill(20, 120);
  noStroke();
  rect(0, 0, width, height);

  for (let i = 0; i < 150; i++) {
    noFill();
    stroke(0, 3);
    rect(i, i, width - i * 2, height - i * 2);
  }

  fill(0, 140 + sin(frameCount * 0.05) * 20);
  rect(0, 0, width, height);
}

function mouseClicked() {
  // fantasma 
  if (mouseX > 300 && mouseX < 410 && mouseY > 370 && mouseY < 550) {
    if (!jumpscareAtivo) {
      jumpscareAtivo = true;
      jumpscareFrame = 0;
      friend.play();
    }
  }

  // lápide 
  if (mouseX > 1028 && mouseX < 1073 && mouseY > 370 && mouseY < 450) {
    window.location.href = 'index.html';
  }
}
