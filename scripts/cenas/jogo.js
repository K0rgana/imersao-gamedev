class Jogo{
    constructor(){
        this.indice = 0;
        this.mapa = fita.mapa;

        this.fimDeJogo = false;
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
        if (!this.fimDeJogo && (key ==='ArrowUp' || key === ' '|| key === 'w')) {
            personagem.pula();
            somPulo.play();
        }else if (this.fimDeJogo && (key === 'Enter' || key === 'r')) {
            window.location.reload();
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
                gameOver(this);
                noLoop();
            }
        }
    
        function gameOver(that) {
                background('rgba(0%,0%,0%,.80)');
                fill("#e55c5c");

                image(imgGameOver, width / 2 - 412 / 2, height / 3 - 150);
                image(imgPerAngry, width / 2 - 412 / 2, height / 3 - 72 / 2 , 350 , 350);
                somJogo.stop()
                somGameOver.play();

                textAlign(CENTER);
                textSize(60);
                text(`voce marcou ${parseInt(pontuacao.pontos)} Pontos`, width / 2 , height / 2 - 120);

                textSize(40);
                text("pressione ENTER ou R para jogar novamente", width / 2, height / 2 + 220 );
                that.fimDeJogo = true;

        }
    }
}