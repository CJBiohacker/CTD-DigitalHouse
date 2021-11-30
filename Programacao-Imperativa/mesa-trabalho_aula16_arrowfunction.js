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