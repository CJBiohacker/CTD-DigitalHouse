/* Exercícios de Fixação PDF1 - JSON e Object Literals */

// Facebook Exemplo
const fbJSON = {
    dadosPerfil: {
        nome: "Carlos",
        sobrenome: "de Lima Junior",
        apelido: "CJ",
        data_nascimento: {
            dia: 12,
            mes: 03,
            ano: 1990
        },
        bio: "Desenvolvedor FullStack MERN em formação.",
        formacao: {
            instituicao: "Digital House",
            curso: "Certified Tech Developer",
            nivel: "Tech Degree"
        },
    }
};

// Objetos Literais

// Exercícios 1, 2 e 3 - Dados dos Clientes
// Identificação => Número da conta, posição do vetor tipo de conta (0 ou 1), valor do saldo, nome e sobrenome do titular.

const Abigail = [5486273622, 0, 27771, "Abigael Natte"];
const Ramon = [1183971869, 1, 8675, "Ramon Connell"];
const Jarret = [9582019689, 1, 27363, "Jarret Lafuente"];
const Ansel = [1761924656, 1, 32415, "Ansel Ardley"];
const Jacki = [7401971607, 1, 18789, "Jacki Shurmer"];
const Jobi = [630841470, 0, 28776, "Jobi Mawtus"];
const Thomasim = [4223508636, 0, 2177, "Thomasin Latour"];
const Lonnie = [185979521, 1, 25994, "Lonnie Verheijden"];
const Alonso = [3151956165, 0, 7601, "Alonso Wannan"];
const Bendite = [2138105881, 1, 33196, "Bendite Huggett"];

const Conta = (vetor) => {
    let dados = {
        num: vetor[0],
        tipo: ["Corrente", "Poupança"],
        saldo: vetor[2],
        nome: vetor[3],
    };

    let tipoIndex = dados.tipo[vetor[1]];

    return console.log(`Conta Bancária
        Titular: ${dados.nome}
        Tipo da Conta: ${tipoIndex}
        Nº: ${dados.num}
        Saldo Atual: R$ ${dados.saldo}
    `);
};

// Testando a função com os Vetores com dados dos Clientes.

Conta(Abigail);
Conta(Ramon);

// Exercício 4 - Objeto com Lista dos 10 Clientes.

const Lista = {
    Abigail: Abigail,
    Ramon: Ramon,
    Jarret: Jarret,
    Ansel: Ansel,
    Jacki: Jacki,
    Jobi: Jobi,
    Thomasim: Thomasim,
    Lonnie: Lonnie,
    Alonso: Alonso,
    Bendite: Bendite
};

// Exercício 5, 6, 7  - Objeto Banco contendo a Lista de Clientes. Função/Método 'consultarCliente' que retorna os dados da variável do titular passado como parâmetro. Função/Método 'deposito'

const Banco = {
    clientes: [
        Lista
    ],
    consultarCliente: (listaTitular) => {
        return Conta(listaTitular);
    },
    deposito: (listaTitular, valorDinheiro) => {


        return console.log(`Depósito realizado, seu novo saldo é: R$ ${valorDinheiro}`);
    }
};

Banco.consultarCliente(Lista.Abigail);
Banco.deposito(Lista.Alonso, 100);










