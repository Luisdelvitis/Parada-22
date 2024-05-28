const dadosQuiz = [
    {
        pergunta: "Quem é o pai de Percy Jackson?",
        opcoes: ["Zeus", "Hades", "Poseidon", "Ares"],
        resposta: "Poseidon"
    },
    {
        pergunta: "Qual é o nome do sátiro amigo de Percy?",
        opcoes: ["Grover", "Tyson", "Annabeth", "Luke"],
        resposta: "Grover"
    },
    {
        pergunta: "Qual é o nome da mãe de Percy?",
        opcoes: ["Sally Jackson", "Annabeth Chase", "Hera", "Athena"],
        resposta: "Sally Jackson"
    },
    {
        pergunta: "Em qual acampamento Percy treina?",
        opcoes: ["Acampamento Meio-Sangue", "Acampamento Júpiter", "Acampamento Saturno", "Acampamento Marte"],
        resposta: "Acampamento Meio-Sangue"
    },
    {
        pergunta: "Quem é a namorada de Percy?",
        opcoes: ["Clarisse", "Thalia", "Annabeth", "Rachel"],
        resposta: "Annabeth"
    }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

document.getElementById("botao-proximo").addEventListener("click", () => {
    const opcaoSelecionada = document.querySelector('input[name="opcao"]:checked');
    if (opcaoSelecionada) {
        verificarResposta(opcaoSelecionada.value);
        indicePerguntaAtual++;
        if (indicePerguntaAtual < dadosQuiz.length) {
            exibirPergunta();
        } else {
            exibirResultado();
        }
    } else {
        alert("Por favor, selecione uma opção!");
    }
});

function exibirPergunta() {
    limparOpcoes();
    const dadosPergunta = dadosQuiz[indicePerguntaAtual];
    document.getElementById("pergunta-container").textContent = dadosPergunta.pergunta;
    const opcoesContainer = document.getElementById("opcoes-container");

    dadosPergunta.opcoes.forEach(opcao => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "opcao";
        input.value = opcao;
        input.id = opcao;

        const label = document.createElement("label");
        label.htmlFor = opcao;
        label.textContent = opcao;

        li.appendChild(input);
        li.appendChild(label);
        opcoesContainer.appendChild(li);
    });
}

function limparOpcoes() {
    const opcoesContainer = document.getElementById("opcoes-container");
    while (opcoesContainer.firstChild) {
        opcoesContainer.removeChild(opcoesContainer.firstChild);
    }
}

function verificarResposta(opcaoSelecionada) {
    const respostaCorreta = dadosQuiz[indicePerguntaAtual].resposta;
    if (opcaoSelecionada === respostaCorreta) {
        pontuacao++;
    }
}

function exibirResultado() {
    limparOpcoes();
    document.getElementById("pergunta-container").textContent = `Você respondeu corretamente ${pontuacao} de ${dadosQuiz.length} perguntas!`;
    document.getElementById("botao-proximo").style.display = "none";
}

function iniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;
    document.getElementById("botao-proximo").style.display = "block";
    exibirPergunta();
}

iniciarQuiz();
