// Declarando parametros com valores direto da construção da função
function soma(a = 1, b = 3) {
    return a + b
}

console.log(soma());
console.log(soma(3));
console.log(soma(1, 2));

// Ordem crescente de sorteio dos elementos da Array
let numeros = [10, 8, 7, 99, 0, 1, 6];

numeros.sort(function num(a, b) {
    return b - a;
});

console.log(numeros);

// For

let a = 0;

for (let i = 20; i < 50; i += 10) {
    a += i;
};

console.log(a);

// Método array.map

// Criação de uma array/vetor de escopo local (let) contendo 3 strings de frutas.
let frutasAmarelas = ['Melão', 'Mamão', 'Limão Siciliano'];

// Criação de uma array/vetor de escopo local (let) contendo 3 strings de frutas.
let frutasVermelhas = ['Morango', 'Cereja', 'Maçã red'];

// Criação de uma array/vetor de escopo local (let) contendo 3 strings de frutas.
let frutasVerdes = ['Limão', 'Kiwi', 'Maçã verde'];

// Variável de escopo global ('var' omitido) que recebe uma função que mapeia cada item da array 'frutas vermelhas', retornando uma nova array com cada elemento em Maísculo. 
frutasVermelhas1 = frutasVermelhas.map(x => x.toUpperCase());

// Criação de uma variável de escopo local (let) que recebe todos os itens de cada array e transforma em outra array. Isso ocorre por causa do spread operator (...), pois ele inclui todos dados das arrays como se fosse uma única array.
let todasFrutas = [...frutasAmarelas, ...frutasVermelhas1, ...frutasVerdes];

console.log(todasFrutas);
/* Imprime no console o vetor 'todasFrutas => 
[
  'Melão',
  'Mamão',
  'Limão Siciliano',
  'MORANGO',
  'CEREJA',
  'MAÇÃ RED',
  'Limão',
  'Kiwi',
  'Maçã verde'
] */

// Operadores de incremento e expressões
let x = 5;
let y = x++ + ++x; // 6 + 6
console.log('y= ' + y); // 12

x = 3;
y = x * (x + 1) * x++;  // 3 * ( 3 + 1 ) * 4 => 36
x = 5;
y = 3;
y *= x + 1; // 3 * ( 5 + 1 ) => 18
console.log('x= ' + x); // 5
console.log('y= ' + y); // 18

// Teste de condição inexistente do IF
let condition = false;

if (condition === true) {
    console.log('true');
}

console.log("Nenhuma condição foi atendida.");