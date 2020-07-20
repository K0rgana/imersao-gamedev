let imgCenario;
let somJogo;
let imgPersonagem;

let cenario;
let personagem;

function preload() {
	imgCenario = loadImage('imagens/cenario/floresta.png');
	imgPersonagem = loadImage('imagens/personagem/correndo.png');
	somJogo = loadSound('sons/airtone_resonance.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 2);
  personagem = new Personagem(imgPersonagem);
  frameRate(20);
  somJogo.loop();
}

function draw() {
	cenario.exibe();
	cenario.move();
	personagem.exibe();
}