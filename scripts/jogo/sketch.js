let imgCenario;
let somJogo;
let imgPersonagem;
let imgInimigo;

let cenario;
let personagem;
let inimigo;

const matrizInimigo = [
	[0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
];

function preload() {
	imgCenario = loadImage('imagens/cenario/floresta.png');
	imgPersonagem = loadImage('imagens/personagem/correndo.png');
	imgInimigo = loadImage('imagens/inimigos/gotinha.png');
	somJogo = loadSound('sons/airtone_resonance.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 2);
  personagem = new Personagem(imgPersonagem);
  inimigo = new Inimigo(matrizInimigo, imgInimigo, width -52, 52, 52, 104, 104);
  frameRate(20);
  somJogo.loop();
}

function draw() {
	cenario.exibe();
	cenario.move();
	personagem.exibe();
	inimigo.exibe();
}