// PASSO 1

// Função que cria replica os elementos do card e insere.
const inserirCardVazio = () => {                    // imgSrc, nomeFelino, descricao
    let getClassContainer = document.querySelector(`.container`);

    let cardItem = document.createElement(`div`);
    cardItem.classList.add(`item`);

    let cardImg = document.createElement(`img`);
    cardImg.src = `https://i0.wp.com/petcaramelo.com/wp-content/uploads/2021/06/Gato-Caracal-7.jpg?resize=1023%2C682&ssl=1`;

    let cardH2 = document.createElement(`h2`);
    let h2Text = document.createTextNode(`Caracal`);
    cardH2.appendChild(h2Text);

    let cardPr = document.createElement(`p`);
    let prText = document.createTextNode(`O caracal (Caracal caracal), também conhecido como lince-do-deserto ou lince-persa, é um carnívoro da família dos felídeos habitante da África e da Ásia Menor. Apesar de sua aparência lembrar a de um lince, este gato selvagem é parente próximo do serval. São felinos de porte médio, sendo que em seu habitat são menores do que as panteras (leões e leopardos) e guepardos mas maiores do que os gatos selvagens africanos. `);
    cardPr.appendChild(prText);

    let cardFelino = getClassContainer.appendChild(cardItem);

    cardFelino.appendChild(cardImg);
    cardFelino.appendChild(cardH2);
    cardFelino.appendChild(cardPr);

    document.body.div.appendChild(cardFelino);
}

// Função para Remover Todos os Cards de Felinos acionada por um botão
const removerFelinos = () => {
    let Felinos = document.querySelectorAll(`.item`);

    Felinos.forEach(card => {
        card.remove();
    });
}

