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
  const inimigoGrande = new Inimigo(matrizInimigoGrande, imgInimigoGrande, width *2, 0, 250, 250, 400, 400, 15, 340);
  const inimigoVoador = new Inimigo(matrizInimigoVoador, imgInimigoVoador, width -52, 200, 110, 85, 200, 150, 13, 350);

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

  const inimigo = inimigos[inimigoAtual];
  const inimigoVisivel = inimigo.x < -inimigo.larguraPer;

  inimigo.exibe();
  inimigo.move();
  
  console.log('hi lorena');
  if (inimigoVisivel) {
    inimigoAtual++;

    if (inimigoAtual > 2) {
      inimigoAtual = 0;
    }

    inimigo.velocidade = parseInt(random(10, 30));
  }

  if (personagem.colisao(inimigo)) {
    image(imgGameOver, width/2 -200, height/3);
    noLoop();
  }

}