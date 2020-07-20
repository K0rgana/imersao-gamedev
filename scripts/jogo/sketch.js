let imgCenario;

let cenario;

function preload() {
	imgCenario = loadImage('imagens/cenario/floresta.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 2);

}

function draw() {
	cenario.exibe();
	cenario.move();
}