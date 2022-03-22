// Criar um arquivo multiplicar.js contendo uma função chamada multiplicar, que deve ser exportada no final do arquivo. Esta função deve receber 2 parâmetros e retornar a multiplicação dos mesmos. Importante:
// Contemplar o cenário onde se um dos dois parâmetros for zero, a função retornará zero.

const Multiplicar = (a, b) => {
    if (a === 0 && b === 0) {
        let zero = 0;

        return zero;
    } else {
        return a * b;
    }
};

export default Multiplicar;