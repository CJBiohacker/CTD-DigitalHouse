const vetortext = ["C", "A", "R", "L", "O", "S"];
let vetor = [0, "olá", true, ...vetortext];

console.log(vetor.toString());
console.log(vetor[1]);
console.log(vetor[5]);

vetor[0] = 10;
vetor[1] = "Hey";
vetor[2] = false;

console.log(vetor.toString());

vetor.push("J");
vetor.push("R");
vetor.unshift("You");

console.log(vetor.toString());

vetor.pop();
vetor.pop();
vetor.shift();

console.log(vetor.toString());

console.log(vetor.includes(vetortext[2]));

// O que esses códigos retornam?

let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);
// Retorna o valor da extensão da array numbers, passado como índice(posição) dos itens. Neste caso, índice 5 que é undefined (indefinido na array).

let grupoDeAmigos = [["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna", "Patán"]];
console.log(grupoDeAmigos[1][0]);
// Retorna o índice das arrays que existem dentro da array 'grupoDeAmigos', sendo a 2a array. Dentro dela, busca o elemento no índice 0, que é "Spiderman".

let str = `Uma string qualquer`;
grupoDeAmigos = [[45, 89, 0], ["Digital", "House", true], ["string", "123", "false", 54, true, str]];
console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1]);
// Retorna a última array do conjunto de arrays contida dentro de "grupoDeAmigos". Dentro dela, retorna o valor da extensão da array "grupoDeAmigos" e subtrai 1 como índice, sendo o valor 5 que corresponde à variável 'str'.

// Array Invertido

const schoolsWitcher = ["Wolf", "Viper", "Cat", "Gryphon", "Bear", "Manticore", "Crane"];

const imprimirInverso = (array) => {
    let newArray = [];
    for (let i = ((array.length) - 1); i >= 0; i--) {
        console.log(array[i]);
    }
};



const inverter = (array) => {
    let newArray = [];
    for (let i = ((array.length) - 1); i >= 0; i--) {
        newArray.push(array[i]);
    }

    return console.log(newArray);
};

imprimirInverso(schoolsWitcher);
inverter(schoolsWitcher);

// Soma Array

