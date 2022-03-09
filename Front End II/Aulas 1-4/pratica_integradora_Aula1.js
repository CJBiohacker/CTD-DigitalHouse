const array = [1, 2, 4, 8];
const soma = (num1, num2) => { return num1 + num2 }
let aux;

console.log(array[0]);

for (let i = 1; i < array.length; i++) {
    aux = soma(array[i - 1], array[i]);
    console.log(aux);
}