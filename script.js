let perguntas = [];
let indice = 0;
let pontuacao = 0;
let geracaoAtual = 1;

async function iniciarJogo() {
  document.getElementById('intro').classList.add('escondido');
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
  document.getElementById('pergunta').innerText = perguntaAtual.pergunta;

  const lista = document.getElementById('opcoes');
  lista.innerHTML = '';

  perguntaAtual.opcoes.forEach((op, i) => {
    const li = document.createElement('li');
    li.textContent = op;
    li.onclick = () => verificarResposta(i);
    lista.appendChild(li);
  });
}

function verificarResposta(indiceSelecionado) {
  const correta = perguntas[indice].correta;
  if (indiceSelecionado === correta) {
    pontuacao++;
    alert('✅ Correto!');
  } else {
    alert('❌ Errado! A resposta correta era: ' + perguntas[indice].opcoes[correta]);
  }
  document.querySelector('button[onclick="proximaPergunta()"]').style.display = 'block';
}

function proximaPergunta() {
  indice++;
  document.querySelector('button[onclick="proximaPergunta()"]').style.display = 'none';
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
  document.getElementById('resultado').classList.add('escondido');
  document.getElementById('intro').classList.remove('escondido');
}
