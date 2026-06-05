let estado = 0;
let progresso = 0;

let letras1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let letras2 = "ᚨᛉᚱᛟᚲᚢᚾᛞᛖ";

let sfx, fundo, ambiente;

function preload(){
  
  fundo = loadImage('img/fundo.jpg');
  sfx = loadSound('sound/swoosh.mp3')
  ambiente = loadSound('sound/The_Manor.mp3')
}

function setup(){

  createCanvas(1200, 700);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  ambiente.loop();
} 

function draw(){
  
  background(0);
  image(fundo, 0, 0, width, height);

  if(estado == 0){
    desenharLivro();
  }

  if(estado == 1){
    progresso = lerp(progresso,1,0.05);

    push();

    translate(width/2,height/2);
    ritual1();

    pop();
  }

  if(estado == 2){
    progresso = lerp(progresso,1,0.05);

    push();

    translate(width/2,height/2);
    ritual2();

    pop();
  }

}

function desenharLivro(){

  rectMode(CENTER);

  // livro
  noStroke();
  fill(110, 65, 10);
  rect(width/2, height/2, 900, 550, 20);

  fill(240, 230, 210);
  rect(width/2 - 220, height/2, 380, 500);
  rect(width/2 + 220, height/2, 380, 500);

  fill(80, 40, 5);
  rect(width/2, height/2, 20, 550);

  // preview ritual 1
  push();

  translate(width/2-220, height/2-40);

  stroke(255,0,0);
  noFill();
  rotate(90);
  
  circle(0,0,160);
  circle(0,0,150);
  circle(0,0,100);
  circle(0,0,80);
  circle(0,0,40);
  triangle(0,-70, -55,50, 55,50);
  triangle(0,70, 55,-50, -55,-50);

  pop();

  // preview ritual 2
  push();

  translate(width/2+220, height/2-40);
  stroke(0,180,255);
  noFill();

  circle(0,0,160);
  circle(0,0,150);
  circle(0,0,120);
  circle(0,0,40);
  hexagono(0,0,60); // criei essa função :D
  hexagono(0,0,20);
  rotate(90)
  hexagono(0,0,50);

  pop();

  // textos
  fill(20);
  textSize(28);
  text("1° RITUAL", width/2 - 220, height/2 + 170);
  text("2° RITUAL", width/2 + 220, height/2 + 170);

  fill(255);
  textSize(32);
  text("CLIQUE EM UMA PÁGINA", width/2, 40);

  
}

function ritual1(){

  stroke(255,0,0);
  noFill();
  strokeWeight(3);

  let maximo = 360 * progresso;

  // circulos
  arc(0, 0, 650, 650, 0, maximo);
  arc(0, 0, 550, 550, 0, maximo);
  arc(0, 0, 450, 450, 0, maximo);
  arc(0, 0, 370, 370, 0, maximo);
  arc(0, 0, 250, 250, 0, maximo);

  // triangulo horizontal
  line(-270 * progresso, 0, 180 * progresso, -200 * progresso);
  line(-270 * progresso, 0, 180 * progresso, 200 * progresso);
  line(180 * progresso, -200 * progresso, 180 * progresso, 200 * progresso);

  // triangulo invertido horizontal
  line(-180 * progresso, -200 * progresso, -180 * progresso, 200 * progresso);
  line(270 * progresso, 0, -180 * progresso, 200 * progresso);
  line(270 * progresso, 0, -180 * progresso, -200 * progresso);
  
  // linhas internas
  line(0, -180 * progresso, 0, 180 * progresso);
  line(-150, -100 * progresso, 150, 100 * progresso);
  line(150, -100 * progresso, -150, 100 * progresso);

  // símbolos externos
  fill(255, 0, 0);
  noStroke();
  textSize(18);

  for(let i = 0; i < 80 * progresso; i++){

    let a = map(i, 0, 80, 0, 360);
    let r = 300;
    let x = cos(frameCount * 0.1 + a) * r;
    let y = sin(frameCount * 0.1 + a) * r;

    let letra = letras1[floor(random(letras1.length))];

    text(letra, x, y);
  }
  
  //simbolos internos
  for(let i = 0; i < 50 * progresso; i++){

    let a = map(i, 0, 50, 0, 360);
    let r = 205;
    let x = cos(frameCount * 0.2 + a) * r;
    let y = sin(frameCount * 0.2 + a) * r;

    let letra = letras1[floor(random(letras1.length))];

    text(letra, x, y);
  }

  // detalhes girando
  noFill();
  stroke(255,0,0);
  strokeWeight(2);

  for(let i = 0; i < 6; i++){

    let a = frameCount * 1.5 + i * 60;
    let x = cos(a) * 90;
    let y = sin(a) * 90;

    circle(x, y, 70 * progresso);
  }
}

function ritual2(){

  stroke(0,180,255);
  noFill();
  strokeWeight(3);

  let maximo = 360 * progresso;

  // circulos
  arc(0, 0, 650, 650, 0, maximo);
  arc(0, 0, 570, 570, 0, maximo);
  arc(0, 0, 510, 510, 0, maximo);
  arc(0, 0, 450, 450, 0, maximo);
  arc(0, 0, 330, 330, 0, maximo);

  // hexagono
  rotate(90);
  hexagono(0, 0, 200 * progresso);
  rotate(270);
  hexagono(0, 0, 30 * progresso);

  // linhas internas
  for(let i = 0; i < 6; i++){

    let a = i * 60;
    let x = cos(a) * 200 * progresso;
    let y = sin(a) * 200 * progresso;

    line(0, 0, x, y);
  }

  // anel estranho
  for(let i = 0; i < 18; i++){

    let a = i * 20 + frameCount * 1.5;
    let x = cos(a) * 250;
    let y = sin(a) * 250;

    line(x, y, x * 0.8, y * 0.8);
  }

  // linguagem própria
  fill(0,180,255);
  noStroke();
  textSize(24);

  for(let i = 0; i < 55 * progresso; i++){

    let a = map(i, 0, 55, 0, 360);
    let r = 305;
    let x = cos(frameCount * 0.1 + a) * r;
    let y = sin(frameCount * 0.1 + a) * r;

    let letra = letras2[floor(random(letras2.length))];

    text(letra, x, y);
  }

  // centro
  stroke(0,180,255);
  noFill();

  for(let i = 0; i < 8; i++){

    rotate(frameCount * 0.15);
    rect(0, 0, 230 - i , 230 - i);
  }
}

function hexagono(x,y,t){

  beginShape();

  for(let i = 0; i < 6; i++){

    let a = i * 60 - 90;

    let px = x + cos(a) * t;
    let py = y + sin(a) * t;

    vertex(px,py);
  }

  endShape(CLOSE);
}

function mousePressed(){

  // voltar pro inicio
  if(estado == 1 || estado == 2){
    if(mouseX > -540 && mouseX < -460 && mouseY > -290 && mouseY < -210){
      estado = 0;
      return;
    }
  }

  // pagina esquerda
  if(
    mouseX > width/2 - 410 &&
    mouseX < width/2 - 30 &&
    mouseY > height/2 - 250 &&
    mouseY < height/2 + 250
  ){
    progresso = 0;
    estado = 1;
    sfx.play();
    return;
  }

  // pagina direita
  if(
    mouseX > width/2 + 30 &&
    mouseX < width/2 + 410 &&
    mouseY > height/2 - 250 &&
    mouseY < height/2 + 250
  ){
    progresso = 0;
    estado = 2;
    sfx.play();
    return;
  }

  let mx = mouseX - width/2;
  let my = mouseY - height/2;

  // ritual 1
  if(
    estado == 1 &&
    mx > -300 &&
    mx < 300 &&
    my > -300 &&
    my < 300
  ){
    window.location.href = "index_7.html";
    return;
  }

  // ritual 2
  if(
    estado == 2 &&
    mx > -300 &&
    mx < 300 &&
    my > -300 &&
    my < 300
  ){
    window.location.href = "index_6.html";
    return;
  }
}