// Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero".

const Dividir = (a, b) => {
    if (a === 0 && b === 0) {
        const erro = "Não pode dividir por zero";

        return alert(erro);
    } else {
        return a / b;
    }
};

export default Dividir;