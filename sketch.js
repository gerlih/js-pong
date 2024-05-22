//variaveis da Bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

//variaveis da velocidade 
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variaveis de raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteLargura = 90;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;

let colidiu = false;

///variaveis do placar
let meusPontos = 0;
let pontosOponente = 0;


function preload() {
  ponto + loadSound("ponto.mp3");
  raquetada +loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3")
}

function setup() {
  createCanvas(600, 400);
  tr
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  mostraRaquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}


function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
  
}


function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;

}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
    xBolinha - raio < 0){
   velocidadexBolinha *= -1;
 }
  
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeyBolinha *= -1;
  }
  
}


function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteLargura);
}


function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }

}
function verificaColisaoRaquete(){
  if(xBolinha - raio < xRaquete + raqueteComprimento
    && yBolinha - raio < yRaquete + raqueteLargura
    && yBolinha + raio > yRaquete){
    velocidadexBolinha *= -1;
    raquetada.play();
  }
}

function verificaColisaoRaquete(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteLargura, xBolinha, yBolinha, raio);
  if(colidiu) {
    velocidadexBolinha *=  -1;
  }
}



function movimentaRaqueteOponente() {
  velocidadeyOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
  yRaqueteOponente += velocidadeyOponente;
}

function incluiPlacar(){
  textAlign(CENTER, CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(130, 14, 40, 20);
  fill(255);
  stroke ('white');
  text(meusPontos, 150, 26);
  fill(color(255, 140, 0));
  rect(430, 14, 40, 20);
  fill(255);
  stroke ('white');
  text(pontosOponente, 450, 26);
  
  
  
}

function marcaPonto(){
  if(xBolinha > 590) {
    meusPontos += 1;
    ponto.play();
  }
if(xBolinha<10){
  pontosOponente+=1;
  ponto.play();
}
}
