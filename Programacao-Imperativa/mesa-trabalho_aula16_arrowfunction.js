// Arrow Function e Callbacks

const print = (arg) => {
    return console.log(`Valor: ${arg}`);
};

const FizzBuzz = (n1, n2) => {

    for (let i = 0; i <= 100; i++) {

        ((i % n1) == 0 && (i % n2) == 0) ? console.log(`FizzBuzz: ${i}`) :
            ((i % n1) == 0) ? console.log(`Fizz: ${i}`) :
                ((i % n2) == 0) ? console.log(`Buzz: ${i}`) :
                    print(i);

    }
};

FizzBuzz(3, 5);



















// Revisão for para o Reginaldo
// Estruturas de Repetição

// let array = [0, 1, 2, 3, 4, 5]

// // for ( variável de contagem ; condição ; incremento )
// for (let contador = 0; contador < array.length; contador++) {

//     console.log(`Valor: ${array[contador]}`);

// };

// let i = 0;

// i = i + 1;

// i += 1;

// i++;

// //----

// i = i + 2;

// i += 2;

// //----

// i = i * 2;

// i *= 2;