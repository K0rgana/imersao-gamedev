class Inimigo extends Animacao{
	constructor(matriz, imagem, x, larguraPer, alturaPer, larguraSprite, alturaSprite){
		super(matriz, imagem, x, larguraPer, alturaPer, larguraSprite, alturaSprite)
		this.velocidade = 10;
	}
	move(){
    this.x = this.x -this.velocidade;

    if (this.x < -this.larguraPer ) {
      this.x = width;
    }
  }
}