// 1 - Loop de Pares

// Você deve criar uma função chamada loopDePares que receba um número como parâmetro 
// e faça loops de 0 a 100 mostrando cada número do loop no console.
// Caso o (número da iteração somado com o número passado pelo parâmetro) seja par (% == 0),
// aparecerá no console: "O número x é par"

let numAleatorio = Math.ceil(Math.random() * 100);

const loopDePares = (numero) => {

   let x;

   for (let i = 0; i <= 100; i++) {
      console.log(`ITERAÇÃO ${i}\nNº = ${numero} Contador = ${i}`);

      ((x = i + numero) % 2 === 0) ?
         console.log(`O número ${x} é par.\n`) :
         console.log(`Valor: ${i}\n`);
   }
};

// loopDePares(numAleatorio);

// 7 - Lidando com 2 arrays

// Você deve criar uma função chamada arrayHandler que receba dois arrays de igual tamanho como
// parâmetros e exiba no console: "Eu sou {elemento do array 1} e eu sou {elemento do array 2}".
// Exemplo:
// arrayHandler([1,2,3], [“o”,”l”,”á”]) deve mostrar: 
// Eu sou 1 e eu sou o
// Eu sou 2 e eu sou l
// Eu sou 3 e eu sou á

const personagens = [`Abby`, `Ellie`, `Dina`, `Owen`, `Yara`, `Lev`];
const armas = [`pistola`, `revolver`, `rifle`, `escopeta`, `granada de fumaça`, `lança-chamas`];

console.log(personagens.length);
console.log(armas.length);

const arrayHandler = (array1, array2) => {

   (array1.length === array2.length) ? :;


};