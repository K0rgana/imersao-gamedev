class Personagem extends Animacao{
	constructor(matriz, imagem, x, variacaoY, larguraPer, alturaPer, larguraSprite, alturaSprite){
		super(matriz, imagem, x, variacaoY, larguraPer, alturaPer, larguraSprite, alturaSprite);

		this.yBase = height - this.alturaPer - variacaoY;
		this.y = this.yBase;

		this.gravidade = 6;
		this.puloVel = 0;
		this.alturaPulo = -50;
		this.pulos = 0;
	}
	pula(){
		if (this.pulos < 3) {
			this.puloVel = this.alturaPulo;
			this.pulos++ ;
		}
	}
	gravidadePer(){
		this.y = this.y + this.puloVel;
		this.puloVel = this.puloVel + this.gravidade;

		if (this.y > this.yBase) {
			this.y = this.yBase;
			this.pulos = 0;
		}
	}
	colisao(inimigo){
		noFill();
		rect(this.x, this.y,this.larguraPer, this.alturaPer);
		rect(inimigo.x, inimigo.y, inimigo.larguraPer, inimigo.alturaPer);

		const precisao = .7;
		const colidir = collideRectRect(
			this.x, this.y, 
			this.larguraPer * precisao,
			this.alturaPer * precisao,

			inimigo.x, inimigo.y,
			inimigo.larguraPer * precisao,
			inimigo.alturaPer * precisao
	);
		return colidir;
	}
}