/* 
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

let tempoPadrao;

// Gera um nº aleatório de 1-5 simulando a seleção de um dos pratos.
const numPrato = Math.ceil(Math.random() * 5);

// Gera um nº aleatório de 1-65 simular a escolha do tempo de preparo do prato.
const selecTempo = Math.ceil(Math.random() * 65);

// Função de Escolha do Prato e definição do tempo de cozimento padrão correspondente.
const tempoPrato = (numero) => {
    switch (numero) {
        case 1:
            console.log("Você escolheu Pipoca.");
            tempoPadrao = 10;
            break
        case 2:
            console.log("Você escolheu Macarrão.");
            tempoPadrao = 8;
            break
        case 3:
            console.log("Você escolheu Carne.");
            tempoPadrao = 15;
            break
        case 4:
            console.log("Você escolheu Feijão.");
            tempoPadrao = 12;
            break
        case 5:
            console.log("Você escolheu Brigadeiro.");
            tempoPadrao = 8;
            break
        default:
            console.log("Prato Inexistente.");;
            break
    };
    console.log(`Este prato leva ${tempoPadrao}s para ficar pronto.\nVocê selecionou ${selecTempo}s no microondas.`);
};

tempoPrato(numPrato);

// Condições => Abaixo do tempo, tempo correto ou aproximado, e 2x maior que o tempo padrão.
const condicaoPrato1 = (selecTempo < tempoPadrao);
const condicaoPrato2 = ((selecTempo === tempoPadrao) || (selecTempo <= (tempoPadrao * 2)));
const condicaoPrato3 = ((selecTempo > (tempoPadrao * 2)) && (selecTempo < (tempoPadrao * 3)));

// Função condicional para resultado da mensagem final.
const mensagemResultado = () => {
    let condicional = (condicaoPrato1) ? console.log("Tempo insuficiente.") :
        (condicaoPrato2) ? console.log("Prato pronto, bom apetite!!!") :
            (condicaoPrato3) ? console.log("A comida queimou.") :
                console.log("KABOOOOOMM");

    return condicional;
};

mensagemResultado();

// Verificação do resultado lógico das condicionais.
// console.log(`${condicaoPrato1}, ${condicaoPrato2} , ${condicaoPrato3}`);


