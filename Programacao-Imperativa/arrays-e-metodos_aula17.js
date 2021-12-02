let numPar = [0, 2, 4, 6, 8];
let numImpar = [1, 3, 5, 7, 9];

const retornaImpar = (vetor) => {
    let resultImpar = vetor.map((x) => x % 2 !== 0);

    return console.log(resultImpar);
};

retornaImpar(numImpar);     // Retorna true pra cada elemento do vetor, pois todos são ímpares.
retornaImpar(numPar);       // Retorna false pra cada elemento do vetor, pois todos são pares.
