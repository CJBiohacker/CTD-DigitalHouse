// 1
function conversorPolToCm(x) {
    let result = (x * 2.54).toFixed(2);

    return console.log(`${x} pol = ${result} cm`);
};

conversorPolToCm(10);

// 2
function nameToUrl(string) {
    let result = `http://www.${string}.com.br`;

    return console.log(result);
}

let a = "banana";
let b = "maçã";

nameToUrl(`batata-${a}-${b}`);

// 3
function exclamation(string) {
    let result = `${string} !`;

    return console.log(result);
}

exclamation("Olá Mundo");

// 4
function conversorIdadeHumToDog(idade) {
    let result = (idade * 7);

    return console.log(`${idade} anos humanos = ${result} anos caninos`);
};

conversorIdadeHumToDog(15);

// 5 
function valorHoraTrabalho(salario) {
    let valorHora = (salario / 160).toFixed(2);

    return console.log(`Recebendo ${salario} durante 160h de trabalho = R$${valorHora}/hora`);
};

valorHoraTrabalho(8000);

// 6
function calcIMC(pesoKG, alturaCM) {
    let alturaM = alturaCM * 0
    let imc = (pesoKG) / ((alturaCM * 0.01) ** 2);

    return console.log(`Peso:${pesoKG}kg Altura:${alturaCM}cm =>  IMC = ${imc.toFixed(1)}kg/m²`);
}

calcIMC(66.5, 167);

// 7
function converLowerToUpperCase(string) {
    let upper = string.toUpperCase();

    return console.log(`Convertendo a ${string} para Maiúscula => ${upper}`);
}

converLowerToUpperCase('nome minúsculo');

// 8
function detectVarType(valor) {
    let detect = typeof valor;

    return console.log(`Tipo de variável => ${detect}`);
}

detectVarType(true);
detectVarType(546);

// 9
function name(params) {

}