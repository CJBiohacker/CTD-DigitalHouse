// Declarados como let, por serem variáveis. Como o escopo é indiferente neste caso, utilizaremos o 'let' por convenção.
let nome = "Carlos";
let sobrenome = "Junior";
let idade = 31;
let peso = 67.5;
let altura = 1.67;
let plano = true;   // Pode receber valores booleanos(true ou false). Este é um caso onde pode receber 'null', tanto por não fazer diferença no resultado final pedido quanto por não influenciar o cálculo do IMC.

// Declarado como constante por ser uma fórmula fixa que somente recebe valores. 
const imc = peso / altura ** 2;

plano = null;
console.log(`${nome} ${sobrenome} tem ${idade} anos e seu índice de massa corporal é de ${imc.toFixed(1)}`);




