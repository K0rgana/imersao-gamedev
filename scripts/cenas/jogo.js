class Jogo{
    constructor(){
        this.indice = 0;
        this.mapa = fita.mapa;
    }
    
    setup(){
        cenario = new Cenario(imgCenario, 2);
        pontuacao = new Pontuacao();
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        
        personagem = new Personagem(matrizPer,imgPersonagem, 30, 30, 150, 175, 220, 270);
        
        const inimigo = new Inimigo(matrizInimigo, imgInimigo, width -52, 30, 62, 62, 104, 104, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imgInimigoGrande, width *2, 0, 250, 250, 400, 400, 15);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imgInimigoVoador, width -52, 200, 110, 85, 200, 150, 13);
        
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
    }

    keyPressed(key){
        if (key ==='ArrowUp') {
            personagem.pula();
            somPulo.play();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        pontuacao.exibe();
        pontuacao.adicionar();

        vida.exibe();

        personagem.exibe();
        personagem.gravidadePer();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.larguraPer;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();
        
        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();

            if (this.indice > this.mapa.length -1) {
                this.indice = 0;
            }

        //inimigo.velocidade = parseInt(random(10, 30));
        }

        if (personagem.colisao(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();
            
            if (vida.vidas === 0) {
                image(imgGameOver, width/2 -200, height/3);
                noLoop();
            }
        }

    }
}