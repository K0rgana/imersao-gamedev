function preload() {
	imgCenario = loadImage('imagens/cenario/floresta.png');
	imgTelainicial = loadImage('imagens/cenario/telaInicial.png');
    imgGameOver = loadImage('imagens/assets/game-over.png');
    imgHeart = loadImage('imagens/assets/heart.png');
    
    imgPersonagem = loadImage('imagens/personagem/correndo.png');
    
	imgInimigo = loadImage('imagens/inimigos/gotinha.png');
	imgInimigoGrande = loadImage('imagens/inimigos/troll.png');
	imgInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
	
	fonteTelaIncial = loadFont('imagens/assets/stellaDemo.otf')
    
	somJogo = loadSound('sons/airtone_resonance.mp3');
	somPulo = loadSound('sons/somPulo.mp3');
}
