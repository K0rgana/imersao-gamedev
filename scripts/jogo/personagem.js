class Personagem extends Animacao{
	constructor(matriz, imagem, x, larguraPer, alturaPer, larguraSprite, alturaSprite){
		super(matriz, imagem, x, larguraPer, alturaPer, larguraSprite, alturaSprite);

		this.yBase = height - this.alturaPer;
		this.y = this.yBase;

		this.gravidade = 3;
		this.puloVel = 0;
	}
	pula(){
		this.puloVel = -30;
	}
	gravidadePer(){
		this.y = this.y + this.puloVel;
		this.puloVel = this.puloVel + this.gravidade;

		if (this.y > this.yBase) {
			this.y = this.yBase;
		}
	}

}