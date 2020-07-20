let imgCenario;
let somJogo;

let cenario;

function preload() {
	imgCenario = loadImage('imagens/cenario/floresta.png');
	somJogo = loadSound('sons/airtone_resonance.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 2);
  somJogo.loop();
}

function draw() {
	cenario.exibe();
	cenario.move();
}