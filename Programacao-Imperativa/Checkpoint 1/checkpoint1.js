// Função de Escolha do Prato e definição do tempo de cozimento padrão correspondente.
const tempoPrato = (numero, tempoUsuario) => {
    let tempoPadrao;

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
            return console.log("Prato Inexistente.");
    };

    console.log(`Este prato leva ${tempoPadrao}s para ficar pronto.\nVocê selecionou ${tempoUsuario}s no microondas.`);

    // Condições => Abaixo do tempo, tempo correto ou aproximado, e 2x maior que o tempo padrão.
    const condicaoPrato1 = (tempoUsuario < tempoPadrao);
    const condicaoPrato2 = ((tempoUsuario === tempoPadrao) || (tempoUsuario <= (tempoPadrao * 2)));
    const condicaoPrato3 = ((tempoUsuario > (tempoPadrao * 2)) && (tempoUsuario < (tempoPadrao * 3)));

    // Estrutura Condicional pra definir o estado final do prato ou do microondas.
    let condicional = (condicaoPrato1) ? console.log("Tempo insuficiente.") :
        (condicaoPrato2) ? console.log("Prato pronto, bom apetite!!!") :
            (condicaoPrato3) ? console.log("A comida queimou.") :
                console.log("KABOOOOOMM");

    return condicional;
};

tempoPrato(15, 80, '\n');
tempoPrato(3, 30, '\n');
tempoPrato(1, 8, '\n');
tempoPrato(2, 18, '\n');
tempoPrato(4, 60, '\n');
tempoPrato(5, 12), '\n';

// // Gera um nº aleatório de 1-5 simulando a seleção de um dos pratos.
// const numPrato = Math.ceil(Math.random() * 5);

// // Gera um nº aleatório de 1-65 simular a escolha do tempo de preparo do prato.
// const selecTempo = Math.ceil(Math.random() * 65);
// Verificação do resultado lógico das condicionais.
// console.log(`${condicaoPrato1}, ${condicaoPrato2} , ${condicaoPrato3}`);


