let banjo, drums, flute, harmonica, piano, whistling, OWbackground;
let botoes = [];
let iniciou = false;
let estrelas = [];

function preload(){
  
  OWbackground = loadImage('../img/background.jpg');
  
  banjo = loadSound('sound/travelers-banjo.mp3');
  drums = loadSound('sound/travelers-drums.mp3');
  flute = loadSound('sound/travelers-flute.mp3');
  harmonica = loadSound('sound/travelers-harmonica.mp3');
  piano = loadSound('sound/travelers-piano.mp3');
  whistling = loadSound('sound/travelers-whistling.mp3');
}

function setup(){

  createCanvas(1200, 700);
  rectMode(CENTER);
  textAlign(CENTER, CENTER);

  let nomes = [
    "BANJO",
    "TAMBOR",
    "FLAUTA",
    "GAITA",
    "PIANO",
    "ASSOBIO"
  ];

  let cores = [
    [255,140,60], // timber hearth
    [220,80,60], // ember twin
    [120,200,255], // giants deep
    [180,120,255], // brittle hollow
    [10,200,120], // sun
    [220,220,220] // dark bramble
  ];

  for(let i = 0; i < 6; i++){

    botoes[i] = []; // matriz
    botoes[i][0] = width/2 - 325 + i * 130; // x
    botoes[i][1] = height - 100; // y
    botoes[i][2] = nomes[i]; // nomes
    botoes[i][3] = false; //ligado ou desligado
    botoes[i][4] = cores[i]; //cores
  }

  // estrelas
  for(let i = 0; i < 200; i++){

    estrelas[i] = []; // matriz
    estrelas[i][0] = random(width); // x aleatorio
    estrelas[i][1] = random(height); // y aleatorio
    estrelas[i][2] = random(1,4); // tamanho aleatorio
    estrelas[i][3] = random(80,255); // brilho aleatorio
  }
}

function draw(){

  background(0);

  image(OWbackground, 0, 0, width, height);

  desenharNebulosa();
  desenharEstrelas();
  desenharSistemaSolar();

  // titulo
  fill(255);
  textSize(45);
  text("TRAVELERS", width/2, 60);

  // subtitulo
  fill(255,150);
  textSize(20);
  text("ATIVE OS INSTRUMENTOS DOS VIAJANTES", width/2, 100);

  desenharBotoes();
}

function desenharEstrelas(){

  noStroke();

  // desenhar as estrelas aleatoriamente
  for(let i = 0; i < estrelas.length; i++){

    fill(255, estrelas[i][3]);
    circle(estrelas[i][0], estrelas[i][1], estrelas[i][2]);
  }
}

function desenharNebulosa(){

  noStroke();

  // desenha brilho em volta da tela
  for(let i = 0; i < 6; i++){

    fill(40, 60, 120, 18);
    circle(width/2 + sin(frameCount * 0.002 + i) * 500, height/2 + cos(frameCount * 0.003 + i) * 300, 500);
  }
}

function desenharSistemaSolar(){

  push();

  translate(width/2, height/2 - 30);
  noFill();
  stroke(255,40);
  strokeWeight(2);

  // linhas da orbita
  for(let i = 0; i < 6; i++){
    
    circle(0, 0, 100 + i * 60);
  }

  // sol
  stroke(200, 150, 0);
  fill(255, 200, 80);
  circle(0, 0, 50);
  noStroke();

  // planetas
  for(let i = 0; i < 6; i++){

    let angulo = frameCount * 0.02 + i * 60;
    let distancia = 50 + i * 30;
    let x = cos(angulo) * distancia;
    let y = sin(angulo) * distancia;

    stroke(botoes[i][4][0] - 50, botoes[i][4][1] - 50, botoes[i][4][2] - 50);
    fill(botoes[i][4][0], botoes[i][4][1], botoes[i][4][2]);
    circle(x, y, 18);
  }

  pop();
}

function desenharBotoes(){

  for(let i = 0; i < botoes.length; i++){

    let x = botoes[i][0];
    let y = botoes[i][1];
    let nome = botoes[i][2];
    let ativo = botoes[i][3];
    let cor = botoes[i][4];

    // glow
    if(ativo){
      noStroke();
      fill(cor[0], cor[1], cor[2], 80);
      circle(x, y, 140);
    }

    // botão
    if(ativo){
      fill(cor[0] - 25, cor[1] - 25, cor[2] - 25);
    } else {
      fill(25, 25, 35);
    }

    stroke(255);
    strokeWeight(3);
    rect(x, y, 110, 110, 20);

    // planeta
    stroke(cor[0] - 25, cor[1] - 25, cor[2] - 25);
    fill(cor[0], cor[1], cor[2]);
    circle(x, y - 18, 35);
    noStroke();

    // nome
    fill(255);
    textSize(13);
    text(nome, x, y + 30);

    // ativo
    if(ativo){
      fill(255);
      textSize(10);
      text("PLAYING", x, y + 45);
    }
  }
}

function mousePressed(){

  if(!iniciou){
    userStartAudio();
    iniciarMusicas();
    iniciou = true;
  }

  for(let i = 0; i < botoes.length; i++){

    let x = botoes[i][0];
    let y = botoes[i][1];

    if(mouseX > x-55 && mouseX < x+55 && mouseY > y-55 && mouseY < y+55)
    {
      botoes[i][3] = !botoes[i][3];
      controlarVolume(i);
    }
  }
}

function iniciarMusicas(){

  banjo.loop();
  drums.loop();
  flute.loop();
  harmonica.loop();
  piano.loop();
  whistling.loop();

  banjo.setVolume(0);
  drums.setVolume(0);
  flute.setVolume(0);
  harmonica.setVolume(0);
  piano.setVolume(0);
  whistling.setVolume(0);
}

function controlarVolume(i){

  let volume = 0;

  if(botoes[i][3]){
    volume = 1;
  }

  if(i == 0){
    banjo.setVolume(volume, 0.5);
  }

  if(i == 1){
    drums.setVolume(volume, 0.5);
  }

  if(i == 2){
    flute.setVolume(volume, 0.5);
  }

  if(i == 3){
    harmonica.setVolume(volume, 0.5);
  }

  if(i == 4){
    piano.setVolume(volume, 0.5);
  }

  if(i == 5){
    whistling.setVolume(volume, 0.5);
  }
}

function mouseClicked() {
  //voltar pra pagina inicial clicando no sol
  
  let solX = width/2;
  let solY = height/2 - 30;

  if( mouseX > solX - 25 && mouseX < solX + 25 && mouseY > solY - 25 && mouseY < solY + 25){
    window.location.href = "index_1.html";
  }
}