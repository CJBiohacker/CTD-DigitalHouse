// Modificando elementos com a API HTML DOM

var h1 = document.querySelector('h1');          // Seleciona o 1ª elemento de título 'h1' na página e atribui à uma variável chamada h1.

alert(h1.innerHTML);                            // Lança uma janela de alert contendo o resultado do título 'h1'.
h1.innerHTML = "<h6>Novo Texto</h6>";           // Modifica o elemento 'h1' para 'h6' com o texto interno 
alert(h1.innerText);                            // Lança uma janela de alert contendo o novo resultado do título, que agora é um 'h6'

let liElements = document.querySelectorAll(`li`);
for (let i = 0; i < liElements.length; i++) {
    liElements.forEach(li => {
        li.classList.add(`novo-li${i}`)

    });
}

