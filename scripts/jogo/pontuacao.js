class Pontuacao{
	constructor(){
		this.pontos = 0;
	}
	adicionar(){
		this.pontos += 0.2;
	}
	exibe(){
		textAlign(CENTER);
		fill('#fff');
		textSize(50);
		text(parseInt(this.pontos), width - 50, 50);
	}
}