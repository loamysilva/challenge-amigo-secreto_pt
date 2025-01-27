let seuNome = "";
let listaAmigos = [];

function adicionarSeuNome() {
    const inputSeuNome = document.getElementById("seuNome");
    const nomeDigitado = inputSeuNome.value.trim();
    const mensagemSeuNome = document.getElementById("mensagemSeuNome");


    if (nomeDigitado === "") {
        alert("Digite um nome válido!");
        return;
    }

    seuNome = nomeDigitado;
    mensagemSeuNome.textContent = "Seu nome foi adicionado!";
    mensagemSeuNome.style.color = "green"; // Muda a cor para destacar
    return;
    
    inputSeuNome.disabled = true; // Bloqueia o campo após adicionar
}

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (nomeAmigo === seuNome) {
        mensagemSorteio.textContent = `Você é seu melhor amigo, não é segredo... \n Mas agora, coloque o nome de outros amigos.`;
        mensagemSorteio.style.color = "red"; // Muda a cor para destacar
        return;
    }

    listaAmigos.push(nomeAmigo);
    atualizarListaAmigos();
    inputAmigo.value = "";
}

function atualizarListaAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaAmigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const mensagemSorteio = document.getElementById("mensagemSorteio");

    if (listaAmigos.length < 2) {
        mensagemSorteio.textContent = "Adicione pelo menos dois amigos para sortear!";
        mensagemSorteio.style.color = "red"; // Muda a cor para destacar
        return;
    }

    let sorteado;
    do {
        sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    } while (sorteado === seuNome); // Evita que o usuário se tire

    mensagemSorteio.textContent = "Sorteio realizado!";
    mensagemSorteio.style.color = "green"; // Indica que deu certo

    document.getElementById("resultado").innerHTML = `<li>Você tirou: <strong>${sorteado}</strong></li>`;
}

