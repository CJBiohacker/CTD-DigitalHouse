// Nível I
function adicionar(a, b) {
    let soma = a + b
    return soma;
};

function subtracao(a, b) {
    let subt = a - b;
    return subt;
};

function mutiplicacao(a, b) {
    let multip = a * b;
    return multip;
};

function divisao(a, b) {
    let div = a / b;
    return div.toFixed(3);
}

// Nível II
console.log(" __________ Calculdora Bazinga RTX Vega 4.39 __________")
console.log("|  Soma =>", adicionar(2, 5));
console.log("|  Subtração =>", subtracao(6, 7));
console.log("|  Multiplicação =>", mutiplicacao(5, 7));
console.log("|  Divisão =>", divisao(5, 2));

// Nível III
function quadradoDoNumero(a) {
    let pot = mutiplicacao(a, a);
    return pot;
};

function mediaDeTresNumeros(a, b, c) { // 1,2,3 => 1+2+3 / 3 = 6/3 = 2
    let media = divisao(adicionar(a, adicionar(b, c)), 3); // divisa(adicionar(1,adicionar(2,3)),3);
    return media;
};

function calculaPorcentagem(num, porcento) {
    let calcP = mutiplicacao(num, divisao(porcento, 100));
    return calcP;
};

function geradorDePorcentagem(num, total) {
    let calcGerP = mutiplicacao(100, divisao(num, total));
    return calcGerP.toFixed(2);
}

console.log("|  Potência ao Quadrado =>", quadradoDoNumero(9));
console.log("|  Média entre 3 números =>", mediaDeTresNumeros(5, 2, 3));
console.log("|  Porcentagem =>", calculaPorcentagem(1250, 23));
console.log("|  Gerador de Porcentagem =>", geradorDePorcentagem(55, 200) + "%");

/* -------------------------------------------------------------------------------------------------- */
// Função pra calcular média que se adapta de acordo com o nº de itens inseridos.
function media(vetor) {
    let sum = 0;

    for (let i = 0; i < vetor.length; i++) {
        sum = sum + vetor[i];
    };

    let avg = sum / vetor.length;

    return avg;
};

console.log(media([1, 2, 3]));
/* -------------------------------------------------------------------------------------------------- */

let a = "string";
let b = 1
let c = true;
let d = NaN;
let e = undefined;
let f = Infinity;

function tipoVar(variavel) {
    return console.log(typeof variavel);
}

tipoVar(a);
tipoVar(b);
tipoVar(c);
tipoVar(d);
tipoVar(e);
tipoVar(f);

let funcao = () => {
    return console.log("Isto é uma função !!!");
}

let array = [0, 1, "a"];

funcao();

tipoVar(funcao);
tipoVar(array);

// a = { nome:"carlos" } => objeto, tratado como 'prototype.Object.object' dentro do javascript
// [0,1,"2",true, a] => vetor, tratado 'prototype.Object.array' dentro do javascript



