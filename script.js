let perguntas = [];
let indiceAtual = 0;
let pontos = 0;

async function iniciarQuiz() {
  const geracaoSelecionada = document.getElementById('geracao').value;
  const response = await fetch('perguntas.json');
  const dados = await response.json();
  perguntas = dados[`geracao${geracaoSelecionada}`];

  indiceAtual = 0;
  pontos = 0;

  document.getElementById('inicio').classList.add('escondido');
  document.getElementById('quiz').classList.remove('escondido');
  document.getElementById('final').classList.add('escondido');

  mostrarPergunta();
}

function mostrarPergunta() {
  if (indiceAtual >= perguntas.length) {
    mostrarResultado();
    return;
  }

  const perguntaAtual = perguntas[indiceAtual];
  document.getElementById('pergunta').textContent = perguntaAtual.pergunta;

  const lista = document.getElementById('opcoes');
  lista.innerHTML = '';

  perguntaAtual.opcoes.forEach((opcao, i) => {
    const item = document.createElement('li');
    item.textContent = opcao;
    item.onclick = () => verificarResposta(i);
    lista.appendChild(item);
  });
}

function verificarResposta(indiceEscolhido) {
  const correta = perguntas[indiceAtual].correta;
  if (indiceEscolhido === correta) {
    pontos++;
    alert('✅ Correto!');
  } else {
    alert(`❌ Errado! A resposta correta era: ${perguntas[indiceAtual].opcoes[correta]}`);
  }
  indiceAtual++;
  mostrarPergunta();
}

function mostrarResultado() {
  document.getElementById('quiz').classList.add('escondido');
  document.getElementById('final').classList.remove('escondido');
  document.getElementById('pontuacaoFinal').textContent = `Você acertou ${pontos} de ${perguntas.length} perguntas.`;
}

function voltarInicio() {
  document.getElementById('inicio').classList.remove('escondido');
  document.getElementById('quiz').classList.add('escondido');
  document.getElementById('final').classList.add('escondido');
}
