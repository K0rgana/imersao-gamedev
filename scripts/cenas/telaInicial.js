class TelaInicial{
    constructor(){
        
    };

    draw(){
        this._imagemBackground();
        this._texto();
        this._botao();
    };

    _imagemBackground(){
        image(imgTelainicial, 0, 0, width, height);
    }
    _texto(){
        textFont(fonteTelaIncial);
        textAlign(CENTER);

        textSize(180);
        /* text('Ghedi', width / 2 , height / 3); */
        text('Agnes', width / 2 , height / 3);
        textSize(80);
        text('e a floresta atemporal', width / 2 , height / 5 * 2);
        /* text('e o vale perdido', width / 2 , height / 5 * 2); */
    }
    _botao(){
        botaoGerenciador.y = height / 7 * 4;
        botaoGerenciador.draw();
    }
}