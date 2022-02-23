// JOGO PEDRA PAPEL E TESOURA
let winCountPlayer, winCountIA = 0;

let Player = () => {
    prompt(` Escolha uma das opções:
    1 - Pedra  2 - Papel  3 - Tesoura)`)
};
let IA = () => Math.ceil(Math.random() * 3);

alert(`Seja bem vindo ao JOKENPO 2077js v2.4.1`);

while (winCountPlayer < 2 || winCountIA < 2) {
    let valuePlayer = parseInt(Player());
    let valueIA = IA();
    let i = 1;

    switch (valueIA) {
        case 1:
            alert(`A IA escolheu a opção : ${valueIA} - Pedra`);
            break;
        case 2:
            alert(`A IA escolheu a opção : ${valueIA} - Papel`);
            break;
        case 3:
            alert(`A IA escolheu a opção : ${valueIA} - Tesoura`);
            break;
    }

    let condWinPlayer = ((valuePlayer === 1) && (valueIA === 3)) || ((valuePlayer === 2) && (valueIA === 1)) || ((valuePlayer === 3) && (valueIA === 2));
    let condWinIA = ((valueIA === 1) && (valuePlayer === 3)) || ((valueIA === 2) && (valuePlayer === 1)) || ((valueIA === 3) && (valuePlayer === 2));
    let condWinDraw = (valuePlayer === valueIA);

    condWinDraw ? alert(`Partida ${i}
                    Houve um Empate !!!`) :
        condWinPlayer ? alert(`Partida ${i}
                Você ${winCountPlayer++} vs IA ${winCountIA++}
                    Parabéns, você venceu essa partida !!!`) :
            condWinIA ? alert(`Partida ${i}
                    Você ${winCountPlayer++} vs IA ${winCountIA++}
                        A IA venceu esta partida !!!`) :
                alert(`ERRO !!!`);
    i++;
}

(winCountPlayer === 2) ?
    alert(`Parabéns !!! Você ganhou o jogo !!! 
        Você ${winCountPlayer} vs IA ${winCountIA}`) :
    (winCountIA === 2) ?
        alert(`Você foi massacrado !!! Desculpe...  
        Você ${winCountPlayer} vs IA ${winCountIA}`) :
        alert("Ero");


