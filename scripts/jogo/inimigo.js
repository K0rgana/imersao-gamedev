class Inimigo extends Animacao{
	constructor(matriz, imagem, x, variacaoY, larguraPer, alturaPer, larguraSprite, alturaSprite, velocidade){
		super(matriz, imagem, x, variacaoY, larguraPer, alturaPer, larguraSprite, alturaSprite);

		this.velocidade = velocidade;
		this.x = width;
	}
	
	move(){
		this.x = this.x -this.velocidade;
	}
	aparece(){
		this.x = width;
	}
}