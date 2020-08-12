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
        fill('#45323c');

        textSize(180);
        /* text('Ghedi', width / 2 , height / 3); */
        text('Agnes', width / 2 , height /  7 * 2);
        textSize(70);
        text('e a floresta atemporal', width / 2 , height / 7 * 3);
        /* text('e o vale perdido', width / 2 , height / 5 * 2); */
    }
    _botao(){
        botaoGerenciador.y = height / 7 * 4;
        botaoGerenciador.draw();
    }
}