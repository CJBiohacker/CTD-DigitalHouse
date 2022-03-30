let validacao = false;

let objetoUsuario = {
    nome: 'Carlos',
    endereco: {
        cidade: {
            nome: "Itaguaí",
            cep: "23820500"
        }
    }
};

let promiseTest = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (validacao) {
            resolve(objetoUsuario);
        } else {
            reject(`Promise rejeitada. Usuário ${objetoUsuario.nome} não encontrado.`)
        }

    }, 5000)

});

const promiseThen1 = (resultadoResolvido) => {
    console.log('Primeiro Then');

    return resultadoResolvido.nome
}

promiseTest.then

