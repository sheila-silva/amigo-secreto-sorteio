// Array vazio para armazenar os nomes

let nomes = [];

// Função para adicionar o nome ao array e exibir a lista, ela será chamada quando um evento for disparado como o usuário clicando em um botão

function adicionarNome() {

    const nome = document.getElementById("nome").value;
    if (nome.trim() !== "") {
        nomes.push(nome);
        exibirListaDeNomes();
        document.getElementById("nome").value = "";
    } else {
        alert("Por favor, insira um nome.");
    }

}

// Função para exibir os nomes do array na tela

function exibirListaDeNomes() {

    const lista = document.getElementById("listaNomes");
    lista.innerHTML = "";
    for (let i = 0; i < nomes.length; i++) {
        let li = document.createElement("li");
        li.textContent = nomes[i];
        lista.appendChild(li);
    }
}

//Função para sortear os nomes

function sortearNome() {

    if (nomes.length < 2) {
        alert("Adicione pelo menos 2 pessoas para realizar o sorteio!");
        return;
    }
    let embaralhados = embaralharArray([...nomes]);
    let sorteio = [];
    for (let i = 0; i < embaralhados.length; i++) {
        sorteio.push({
            sorteado: embaralhados[i],
            amigo: embaralhados[(i + 1) % embaralhados.length],
        });
    }

    exibirResultado(sorteio);

    sorteioConcluido = true; 
}


// Função para embaralhar um array 

function embaralharArray(array) {

    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

// Função para exibir o resultado do sorteio na tela

function exibirResultado(sorteio) {

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "<h3>Resultado do sorteio:</h3>"; 
    sorteio.forEach((sorteado) => {
        let p = document.createElement("p");
        p.textContent = `${sorteado.sorteado} sorteou ${sorteado.amigo}.`;
        resultadoDiv.appendChild(p); 
    });
}

// Função para reiniciar o sorteio  

function reiniciarSorteio() {
    
    nomes = [];
    exibirListaDeNomes();
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; 
    document.getElementById("nome").value = "";
    alert("O sorteio foi reiniciado. Adicione novos nomes para realizar um novo sorteio.");
}
