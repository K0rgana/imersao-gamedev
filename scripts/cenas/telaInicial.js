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
        fill('#ffc5c8');
        textSize(38);
        text('ajude agnes a desviar dos seres da floresta', width / 2 , height / 7 * 5.7); 
        text('use seta para cima ou espaco para pular', width / 2 , height / 7 * 6); 
        fill('#ffe9dc');
        textSize(20);
        text('criado por k0rgana', width / 2 , height - 40); 
    }
    _botao(){
        botaoGerenciador.y = height / 7 * 4;
        botaoGerenciador.draw();
    }
}