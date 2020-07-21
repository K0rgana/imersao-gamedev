let imgCenario;
let somJogo;
let imgPersonagem;
let imgInimigo;
let imgInimigoGrande;
let imgInimigoVoador;
let somPulo;

let cenario;
let personagem;
let inimigo;
let inimigoGrande;
let inimigoVoador;
let pontuacao;

const matrizInimigo = [
	[0, 0],    [104, 0],    [208, 0],    [312, 0],
	[0, 104],  [104, 104],  [208, 104],  [312, 104],
  [0, 208],  [104, 208],  [208, 208],  [312, 208],
  [0, 312],  [104, 312],  [208, 312],  [312, 312],
  [0, 418],  [104, 418],  [208, 418],  [312, 418],
  [0, 522],  [104, 522],  [208, 522],  [312, 522],  
  [0, 626],  [104, 626],  [208, 626],  [312, 626],
];
const matrizInimigoGrande = [
  [0,0],  	[400,0],  	[800,0],  	[1200,0], 	 [1600,0],
  [0,400],  [400,400],	[800,400],	[1200,400],	 [1600,400],
  [0,800],	[400,800],	[800,800],  [1200,800],	 [1600,800],
  [0, 1200],[400, 1200],[800, 1200],[1200, 1200],[1600, 1200], 
  [0, 1600],[400, 1600],[800, 1600],[1200, 1600],[1600, 1600],
  [0, 2000],[400, 2000],[800, 2000],
];
const matrizInimigoVoador = [
  [0,0],  	[200, 0],	  [400, 0],
  [0, 150], [200, 150], [400, 150],
  [0, 300], [200, 300], [400, 300],
  [0, 450], [200, 450], [400, 450],
  [0, 600], [200, 600], [400, 600],
  [0, 750],
];
const matrizPer = [
  [0, 0],   [220, 0],   [440, 0],   [660, 0],
  [0, 270], [220, 270], [440, 270], [660, 270],
  [0, 540], [220, 540], [440, 540], [660, 540],
  [0, 810], [220, 810], [440, 810], [660, 810],
];

const inimigos = [];

function preload() {
	imgCenario = loadImage('imagens/cenario/floresta.png');
	imgPersonagem = loadImage('imagens/personagem/correndo.png');
	imgInimigo = loadImage('imagens/inimigos/gotinha.png');
	imgInimigoGrande = loadImage('imagens/inimigos/troll.png');
	imgInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
	somJogo = loadSound('sons/airtone_resonance.mp3');
	somPulo = loadSound('sons/somPulo.mp3');
}

function keyPressed(){
	if (key ==='ArrowUp') {
		personagem.pula();
		somPulo.play();
	}
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 2);
  pontuacao = new Pontuacao();

  personagem = new Personagem(matrizPer,imgPersonagem, 30, 30, 150, 175, 220, 270);

  const inimigo = new Inimigo(matrizInimigo, imgInimigo, width -52, 30, 62, 62, 104, 104, 10, 300);
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imgInimigoGrande, width *2, 0, 250, 250, 400, 400, 15, 1500);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imgInimigoVoador, width -52, 200, 110, 85, 200, 150, 13, 2500);

  inimigos.push(inimigo);
  inimigos.push(inimigoGrande);
  inimigos.push(inimigoVoador);

  frameRate(20);
  somJogo.loop();
}

function draw() {
	cenario.exibe();
	cenario.move();

	pontuacao.exibe();
	pontuacao.adicionar();

	personagem.exibe();
	personagem.gravidadePer();

	inimigos.forEach(inimigo =>{
		inimigo.exibe();
		inimigo.move();

		if (personagem.colisao(inimigo)) {
			console.log('colidiu');
			noLoop();
		}
	});
}