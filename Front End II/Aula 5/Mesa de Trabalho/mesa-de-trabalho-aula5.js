/* 
    Você deve modificar o CSS comentado. Ele tem os estilos para o tema escuro, mas você terá que configurar os seletores que deseja usar.

    Defina quais métodos você deverá utilizar para solicitar um valor a um usuários.

    Não existe uma única maneira de resolver este exercício, então sinta-se encorajado a experimentar opções diferentes, mesmo depois de terminar uma primeira versão implementada. 
*/

let body = document.querySelector(`body`);
let h1 = document.querySelector(`h1`);
// let item = document.querySelectorAll(`.item`);

const darkMode = () => {
    let itemAtualizado = document.querySelectorAll('.item');

    body.style.backgroundColor = 'rgb(39, 39, 39)';
    h1.style.backgroundColor = 'rgb(19, 19, 19)';
    h1.style.color = 'rgb(170, 170, 170)';
    h1.style.borderColor = 'black';

    item.forEach(el => {
        el.classList.add('dark-item');
    });
};

const lightMode = () => {
    body.style.backgroundColor = '';
    h1.style.backgroundColor = 'white';
    h1.style.color = 'grey';
    h1.style.borderBottom = 'lightgrey';

    item.forEach(el => {
        el.classList.remove('dark-item');
    });
}
