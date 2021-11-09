function podeSubir(altura, companhia) {
    let passagem;

    if (altura < 1.20 ) {
        passagem = false;
        return console.log('Acesso negado');
    } else if (altura < 1.40 && companhia === true) {
        passagem = true;
        return console.log('Acesso autorizado somente com acompanhante.');
    } else if (altura > 1.40 && altura < 2) {
        passagem = true;
        return console.log('Acesso autorizado');
    } else {
        return console.log('Acesso negado');
    }
};

podeSubir(1.35,true);