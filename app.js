
let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado.");
        return;
    }

    amigos.push(nome);

    atualizarLista();

    input.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para o sorteio!");
        return;
    }

    let sorteio = [...amigos];
    sorteio = embaralharArray(sorteio);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < sorteio.length; i++) {
        let amigo1 = sorteio[i];
        let amigo2 = sorteio[(i + 1) % sorteio.length];

        let li = document.createElement("li");
        li.textContent = `${amigo1} → ${amigo2}`;
        resultado.appendChild(li);
    }
}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
