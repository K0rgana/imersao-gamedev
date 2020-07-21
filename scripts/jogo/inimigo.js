class Inimigo extends Animacao{
	constructor(matriz, imagem, x, variacaoY, larguraPer, alturaPer, larguraSprite, alturaSprite, velocidade, delay){
		super(matriz, imagem, x, variacaoY, larguraPer, alturaPer, larguraSprite, alturaSprite);

		this.velocidade = velocidade;
		this.delay = delay;
		this.x = width + delay;
	}
	move(){
    this.x = this.x -this.velocidade;

    if (this.x < -this.larguraPer - this.delay) {
      this.x = width;
    }
  }
}