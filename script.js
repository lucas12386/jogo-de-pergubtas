let perguntas = [];
let indice = 0;
let pontuacao = 0;
let geracaoAtual = 1;

document.getElementById('btnIniciar').addEventListener('click', iniciarJogo);
document.getElementById('btnReiniciar').addEventListener('click', reiniciar);

async function iniciarJogo() {
  document.getElementById('intro').classList.add('escondido');
  document.getElementById('resultado').classList.add('escondido');
  document.getElementById('quiz').classList.remove('escondido');

  geracaoAtual = parseInt(document.getElementById('geracao').value);
  const response = await fetch('perguntas.json');
  const data = await response.json();
  perguntas = data[`geracao${geracaoAtual}`];

  indice = 0;
  pontuacao = 0;

  mostrarPergunta();
}

function mostrarPergunta() {
  const perguntaAtual = perguntas[indice];
  document.getElementById('pergunta').innerText = `(${indice + 1}/${perguntas.length}) ${perguntaAtual.pergunta}`;

  const lista = document.getElementById('opcoes');
  lista.innerHTML = '';

  perguntaAtual.opcoes.forEach((opcao, i) => {
    const li = document.createElement('li');
    li.textContent = opcao;
    li.addEventListener('click', () => verificarResposta(i));
    lista.appendChild(li);
  });
}

function verificarResposta(indiceSelecionado) {
  const correta = perguntas[indice].correta;

  if (indiceSelecionado === correta) {
    alert('✅ Correto!');
    pontuacao++;
  } else {
    const respostaCerta = perguntas[indice].opcoes[correta];
    alert(`❌ Errado! Resposta correta: ${respostaCerta}`);
  }

  indice++;

  if (indice < perguntas.length) {
    mostrarPergunta();
  } else {
    fimDeJogo();
  }
}

function fimDeJogo() {
  document.getElementById('quiz').classList.add('escondido');
  document.getElementById('resultado').classList.remove('escondido');
  document.getElementById('pontuacao').innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
}

function reiniciar() {
  document.getElementById('intro').classList.remove('escondido');
  document.getElementById('resultado').classList.add('escondido');
}
