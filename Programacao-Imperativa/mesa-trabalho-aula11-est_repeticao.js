let filmes = ["Matrix", "Dune", "Up!", "Django Unchained", "Eyes Wide Shut", "Batman Dark Knight", "At Eternity's Gate"];
let animacoes = ["Big Hero 6", "Zootopia", "Inside Out", "Toy Story", "Monster, Inc.", "The Incredibles", "Brave"];

// 1. Função com repetição 'for' que converte a escrita de cada elemento de uma array em maiúscula.
const conversaoMaiusculaVetor = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = vetor[i].toUpperCase();
    };

    return console.log(vetor.toLocaleString());
}

conversaoMaiusculaVetor(filmes);

// 2. Função com repetição para remover elementos de um vetor alvo para um vetor principal.
const passagemElementos = (vetorPrincipal, vetorAlvo) => {
    let i = 0;
    while (i != vetorAlvo.length) {
        vetorPrincipal.push(vetorAlvo.pop().toUpperCase());

    };
    return console.log(vetorPrincipal)
};

passagemElementos(filmes, animacoes);

// 4. Função comparadora entre os elementos de vetores diferentes.
const jogos = ["Crysis", "Super Mario 64", "Rage 2", "Metal Gear Solid 3"];
const jogosFPS = ["Crysis", "007 Goldeneye", "Rage 2", "Perfect Dark"];

const comparaVetores = (vetor1, vetor2) => {
    let compare = [];
    let i = 0;

    do {
        compare.push(vetor1[i] == vetor2[i])
        i++;
    } while (i !== vetor1.length);

    return console.log(compare);
}

comparaVetores(jogos, jogosFPS);