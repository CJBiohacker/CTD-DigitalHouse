// Elementos/Classes/ID's capturados.
let submitButton = document.getElementById('submit-button');
let names = document.getElementById('group-names');

names.style.color = 'green';

// Passo 2 - Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
submitButton.addEventListener('click', event => {
    event.preventDefault();
});

// Passo 3 - Mostre um alerta na página quando a tela terminar de ser carregada.
const onLoadAlert = () => {
    alert('Página Carregada !!!');
}

// Passo 4 - Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
names.addEventListener('mouseover', () => {
    names.style.color = 'green';
});

names.addEventListener('mouseout', () => {
    names.style.color = 'blue';
});

// Passo 5 - Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p> e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p>.



