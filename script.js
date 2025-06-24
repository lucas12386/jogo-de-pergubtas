const todasPerguntas = {
  geracao1: [
    {
      pergunta: "Quem é o principal autor da 1ª geração romântica no Brasil?",
      opcoes: ["Álvares de Azevedo", "Castro Alves", "Gonçalves Dias", "José de Alencar"],
      correta: 2
    },
    {
      pergunta: "Tema central da poesia da 1ª geração romântica:",
      opcoes: ["Morte e melancolia", "Crítica social", "Exaltação do índio e da natureza", "Amor platônico"],
      correta: 2
    },
    {
      pergunta: "Obra famosa de Gonçalves Dias:",
      opcoes: ["O Navio Negreiro", "Noite na Taverna", "Canção do Exílio", "Iracema"],
      correta: 2
    },
    {
      pergunta: "A 1ª geração buscava construir:",
      opcoes: ["Uma crítica ao governo", "Uma identidade nacional", "Uma sátira da nobreza", "Um humor popular"],
      correta: 1
    }
  ],
  geracao2: [
    {
      pergunta: "Poeta símbolo da 2ª geração romântica:",
      opcoes: ["Gonçalves Dias", "Castro Alves", "Álvares de Azevedo", "Machado de Assis"],
      correta: 2
    },
    {
      pergunta: "Principal tema da 2ª geração:",
      opcoes: ["Exaltação do índio", "Morte, tédio e pessimismo", "Liberdade e justiça", "Vida rural"],
      correta: 1
    },
    {
      pergunta: "Qual destas obras é de Álvares de Azevedo?",
      opcoes: ["O Guarani", "Lira dos Vinte Anos", "Espumas Flutuantes", "Inocência"],
      correta: 1
    },
    {
      pergunta: "Casimiro de Abreu ficou famoso por qual poema?",
      opcoes: ["O Navio Negreiro", "Meus Oito Anos", "Iracema", "Canção do Exílio"],
      correta: 1
    }
  ],
  geracao3: [
    {
      pergunta: "Quem é o 'Poeta dos Escravos'?",
      opcoes: ["Álvares de Azevedo", "Casimiro de Abreu", "Castro Alves", "José de Alencar"],
      correta: 2
    },
    {
      pergunta: "A 3ª geração romântica é marcada por:",
      opcoes: ["Nacionalismo indígena", "Crítica social e política", "Amor idealizado", "Saudosismo"],
      correta: 1
    },
    {
      pergunta: "Poema mais conhecido de Castro Alves:",
      opcoes: ["Canção do Exílio", "O Guarani", "O Navio Negreiro", "Noite na Taverna"],
      correta: 2
    },
    {
      pergunta: "A 3ª geração recebeu o nome 'condoreira' por:",
      opcoes: ["Referência à natureza", "Referência ao condor e aos ideais de liberdade", "Local de nascimento dos autores", "Presença de temas religiosos"],
      correta: 1
    }
  ]
};

let perguntas = [];
let indiceAtual = 0;
let pontos = 0;

function iniciarQuiz() {
  const select = document.getElementById("geracao");
  const geracaoSelecionada = select.value;

  perguntas = todasPerguntas[`geracao${geracaoSelecionada}`];

  if (!perguntas || perguntas.length === 0) {
    alert("Não há perguntas para essa geração.");
    return;
  }

  indiceAtual = 0;
  pontos = 0;

  document.getElementById("inicio").classList.add("escondido");
  document.getElementById("quiz").classList.remove("escondido");
  document.getElementById("final").classList.add("escondido");

  mostrarPergunta();
}

function mostrarPergunta() {
  if (indiceAtual >= perguntas.length) {
    mostrarResultado();
    return;
  }

  const perguntaAtual = perguntas[indiceAtual];
  document.getElementById("pergunta").textContent = perguntaAtual.pergunta;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";

  perguntaAtual.opcoes.forEach((opcao, index) => {
    const li = document.createElement("li");
    li.textContent = opcao;
    li.addEventListener("click", () => verificarResposta(index));
    opcoes.appendChild(li);
  });
}

function verificarResposta(respostaSelecionada) {
  const correta = perguntas[indiceAtual].correta;

  if (respostaSelecionada === correta) {
    alert("✅ Correto!");
    pontos++;
  } else {
    const respostaCerta = perguntas[indiceAtual].opcoes[correta];
    alert(`❌ Errado! A resposta correta era: ${respostaCerta}`);
  }

  indiceAtual++;
  mostrarPergunta();
}

function mostrarResultado() {
  document.getElementById("quiz").classList.add("escondido");
  document.getElementById("final").classList.remove("escondido");

  const total = perguntas.length;
  document.getElementById("pontuacaoFinal").textContent =
    `Você acertou ${pontos} de ${total} perguntas.`;
}

function voltarInicio() {
  document.getElementById("inicio").classList.remove("escondido");
  document.getElementById("quiz").classList.add("escondido");
  document.getElementById("final").classList.add("escondido");
}
