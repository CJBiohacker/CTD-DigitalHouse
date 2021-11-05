let x = false;

function comparativoFalse(valor) {
    return valor == false;
}

function comparativoTrue(valor) {
    return valor == true;
}

function comparativoEstritoFalse(valor) {
    return valor === false;
}

function comparativoEstritoTrue(valor) {
    return !valor === true;
}

console.log(comparativoFalse(x));
console.log(comparativoTrue(x));
console.log(comparativoEstritoFalse(x));
console.log(comparativoEstritoTrue(x));

let y = false;

if (!y) /* true */ {
    console.log("Condição Verdadeira !!!");
} else /* false */ {
    console.log("Condição False !!!");
};

// IF TERNÁRIO
(!y) ? console.log("Condição Verdadeira !!!") : console.log("Condição False !!!");

y = 2;
// PRA FICAR CABULOSO !!
if (y == 1) {
    console.log("A");
} else if (y == 2) {
    console.log("B");
} else {
    console.log("C");
};

(y == 1) ? console.log("A") : (y == 2) ? console.log("B") : console.log("C");

