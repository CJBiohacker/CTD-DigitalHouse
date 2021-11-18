const brunaLoise = [23, 82, 46];
const rodrigoMarques = [45, 8, 32];

function encontrarGanhador(vetor1, vetor2) {
    let pontosComediante1 = 0;
    let pontosComediante2 = 0;

    console.log('Comparando as notas entre os(as) Comediantes:');

    for (let i = 0; i < vetor1.length; i++) {
        console.log(`=> Rodada nº ${i}`);

        if (vetor1[i] > vetor2[i]) {
            pontosComediante1++;
            console.log('   O(A) 1º/ª Comediante ganhou 1 ponto nesta rodada');

        } else if (vetor1[i] < vetor2[i]) {
            pontosComediante2++;
            console.log('   O(A) 2º/ª Comediante ganhou 1 ponto nesta rodada');

        } else if (vetor1[i] == vetor2[i]) {
            console.log('   Houve um empate nesta rodada');

        } else {
            console.log('Condição Inexistente');

        };
    };

    if (pontosComediante1 > pontosComediante2) {
        return console.log(`\nO(a) vencedor(a) é o(a) 1º/ª Comediante com ${pontosComediante1} pontos.`);

    } else if (pontosComediante2 > pontosComediante1) {
        return console.log(`O(a) vencedor(a) é o(a) 2º/ª Comediante com ${pontosComediante2} pontos.`);

    } else if (pontosComediante2 == pontosComediante1) {
        return console.log(`Ambos terminaram com a mesma pontuação:  ${pontosComediante1} x ${pontosComediante2}. Temos um empate.`);

    } else {
        return console.log(`Condição Inexistente.`);

    };
};

encontrarGanhador(brunaLoise, rodrigoMarques);

/*
  (vetor1[i] > vetor2[i]) ? (
            pontosComediante1++,
            console.log('O(A) 1º/ª Comediante ganhou 1 ponto nesta rodada');
        ) ? (vetor1[i] < vetor2[i]) : (
            pontosComediante2++,
            console.log('O(A) 2º/ª Comediante ganhou 1 ponto nesta rodada');
        ) ? (vetor1[i] == vetor2[i]) : (
            console.log('Houve um empate nesta rodada');
        ) : (
            console.log('Condição Inexistente');
        );
*/