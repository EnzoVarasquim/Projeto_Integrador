let estrelas = [];
let particulas = [];
let transicao = 0;
let estado = 0;
let filtro = 0;
let backgroundMusica, sfx;

function preload(){
  backgroundMusica = loadSound('sound/Elegy for the Rings.mp3');
  sfx = loadSound('sound/swoosh.mp3');
}

function setup(){
  backgroundMusica.loop();

  createCanvas(1200, 700);
  noStroke();

  //estrelas
  for (let i = 0; i < 250; i++){
    estrelas[i] = []; //matriz
    
    estrelas[i][0] = random(width); //x
    estrelas[i][1] = random(height); //y
    estrelas[i][2] = random(1, 3); //tamanho
    estrelas[i][3] = random(100, 255); //brilho
  }

  //particulas
  for (let i = 0; i < 400; i++){
    particulas[i] = []; //matriz

    particulas[i][0] = random(width); //x
    particulas[i][1] = random(height); //y
    particulas[i][2] = random(1,7); //tamanho
    particulas[i][3] = random(-1,1); //velocidade x
    particulas[i][4] = random(-2,2); //velocidade y
    particulas[i][5] = random(50,255); //alpha
  }
}

function draw(){

  background(0);

  //suaviza transição
  transicao = lerp(transicao, estado, 0.08);

  //funções
  desenharEstrelas();
  desenharNebulosa();
  atualizarParticulas();
  desenharNave();
  desenharAstronauta();
  desenharFiltro();
  desenharTexto();
}

function desenharEstrelas(){

  for (let i = 0; i < estrelas.length; i++){
    fill(255, estrelas[i][3]);
    circle(estrelas[i][0], estrelas[i][1], estrelas[i][2]);
  }
}

function desenharNebulosa(){

  noStroke();

  let cor1 = color(40, 120, 80, 25);
  let cor2 = color(180, 40, 40, 25);

  let corNebulosa = lerpColor(cor1, cor2, transicao);

  //nebulosa
  for(let i = 0; i < 50; i++){

    //loop atravessando tela
    let x = (frameCount * 0.4 + i * 180) % (width + 400) - 200;
    let y = height/2 + sin(frameCount * 0.02 + i) * 150;

    //brilho
    fill(red(corNebulosa), green(corNebulosa), blue(corNebulosa), 8);
    circle(x, y, 500);

    //corpo principal
    fill(corNebulosa);
    circle(x, y, 300);

    //núcleo
    fill(255, 15);
    circle(x, y, 120);
  }
}
 
function atualizarParticulas(){

  for (let i = 0; i < particulas.length; i++){
    //transição dos temas
    if(transicao < 0.5){
      
      particulas[i][1] -= 0.5;
      particulas[i][0] += sin(frameCount * 0.01 + particulas[i][1]) * 0.3;
    } else {
      
      particulas[i][0] += particulas[i][3] * 2;
      particulas[i][1] += particulas[i][4] * 2;
    }

    //loop das particulas
    if(
      particulas[i][0] < -50 ||
      particulas[i][0] > width + 50 ||
      particulas[i][1] < -50 ||
      particulas[i][1] > height + 50
    )
    {
      particulas[i][0] = random(width);
      particulas[i][1] = random(height);
    }

    //desenhar as particulas
    let brilho = map(transicao, 0, 1, 30, 255);

    //brilho em volta do nucleo
    fill(255, brilho * 0.08);
    circle(particulas[i][0], particulas[i][1], particulas[i][2] * 5);

    //nucleo
    fill(255, brilho);
    circle(particulas[i][0], particulas[i][1], particulas[i][2]);
  }
}

function desenharNave(){

  push();

  translate(width / 2, height);

  //brilho lateral
  let brilhoNave = map(transicao, 0, 1, 80, 255);
  fill(0, brilhoNave * 0.5);
  circle(0, 50, 500);

  //Camadas do circulo por estado
  if (estado == 0){

    // glow verde escuro
    fill(20, 80, 20, 80);
    circle(0, 50, 560);

    // camada externa
    fill(5, 25, 5);
    circle(0, 50, 520);

    // camada média
    fill(10, 40, 10);
    circle(0, 50, 480);

    // corpo principal
    fill(15, 60, 15);
    circle(0, 50, 450);

    // núcleo
    fill(20, 80, 20);
    circle(0, 50, 420);

  } else {
    // glow vermelho escuro
    fill(120, 20, 20, 70);
    circle(0, 50, 560);

    // camada externa
    fill(40, 5, 5);
    circle(0, 50, 520);

    // camada média
    fill(70, 10, 10);
    circle(0, 50, 480);

    // corpo principal
    fill(100, 15, 15);
    circle(0, 50, 450);

    // núcleo
    fill(120, 20, 20);
    circle(0, 50, 420);
  }

  pop();
}

function desenharAstronauta(){

  push();

  translate(width / 2 - 120, height / 2 + 50);
  rotate(radians(-15));

  //capacete
  fill(40, 100)
  ellipse(0, -42, 45);
  
  //cabeça
  fill(30);
  ellipse(0, -42, 35);

  //mochila
  fill(30);
  rect(-25, -20, 12, 40, 5);
  
  //corpo
  rect(-15, -25, 30, 60, 10);

  //pernas
  stroke(30);
  strokeWeight(8);
  line(-5, 35, -5, 70); //esquerdo
  line(5, 35, 20, 70); //direito

  //braços
  line(-15, 0, -45, -20); //esquerdo
  line(15, 0, 35, 25); // direito

  pop();
}

function desenharFiltro(){

  //função pra deixar as cores mais vivas
  filtro *= 0.92;
  fill(255, filtro);
  rect(0, 0, width, height);
}

function desenharTexto(){

  //texto de intruções
  fill(255, 180);
  textAlign(CENTER);
  textSize(14);
  
  //mudar conforme o tema
  if(estado == 0){
    text("CLIQUE PARA VER OS ASTROFÁGICOS", width / 2, height - 30);
  } else {
    text("REAÇÃO DE ASTROFÁGICOS: VÍSIVEL", width / 2, height - 30);
  }
  
}

function mousePressed(){
  //alterna os modos

  if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    // muda tema
    if (estado == 0){
      estado = 1;
    } else {
      estado = 0;
    }

    sfx.play();

    //flash pra transição
    filtro = 255;
  }

}

function mouseClicked(){
  //volta pra tela inicial quando clica no astronauta

  let astronautaX = width / 2 - 120;
  let astronautaY = height / 2 + 50;

  if( mouseX > astronautaX - 50 && mouseX < astronautaX + 50 && mouseY > astronautaY - 70 && mouseY < astronautaY + 80){
    window.location.href = "index_1.html";
  }
}