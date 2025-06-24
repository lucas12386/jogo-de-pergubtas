let questions = [
  // 1ª Geração Romântica
  {
    question: "Quem é o principal autor da 1ª geração romântica no Brasil?",
    options: [
      "Álvares de Azevedo",
      "Castro Alves",
      "Gonçalves Dias",
      "José de Alencar"
    ],
    correct: 0
  },
  {
    question: "Qual o principal tema da 1ª geração romântica?",
    options: [
      "Nacionalismo",
      "Amor e saudade",
      "Exaltação do índio",
      "Morte e melancolia"
    ],
    correct: 3
  },
  {
    question: "Obra famosa de Gonçalves Dias?",
    options: [
      "Iracema",
      "Canção do Exílio",
      "O Primo Basílio",
      "O Guarani"
    ],
    correct: 1
  },
  {
    question: "A 1ª geração romântica teve forte influência de qual movimento literário?",
    options: [
      "Classicismo",
      "Barroco",
      "Ultrarromantismo",
      "Arcadismo"
    ],
    correct: 3
  },

  // 2ª Geração Romântica
  {
    question: "Poeta símbolo da 2ª geração romântica?",
    options: [
      "Gonçalves Dias",
      "Castro Alves",
      "Álvares de Azevedo",
      "Machado de Assis"
    ],
    correct: 1
  },
  {
    question: "Qual o principal tema da 2ª geração romântica?",
    options: [
      "Amor platônico",
      "Morte, tédio e pessimismo",
      "Crítica à sociedade",
      "Religiosidade"
    ],
    correct: 1
  },
  {
    question: "Quem escreveu a obra 'O Navio Negreiro'?",
    options: [
      "José de Alencar",
      "Castro Alves",
      "Álvares de Azevedo",
      "Gonçalves Dias"
    ],
    correct: 1
  },
  {
    question: "Casimiro de Abreu ficou famoso por qual poema?",
    options: [
      "Meus Oito Anos",
      "O Navio Negreiro",
      "Canção do Exílio",
      "Lira dos Vinte Anos"
    ],
    correct: 0
  },

  // 3ª Geração Romântica
  {
    question: "Qual poeta é conhecido como 'Poeta dos Escravos'?",
    options: [
      "José de Alencar",
      "Castro Alves",
      "Álvares de Azevedo",
      "Gonçalves Dias"
    ],
    correct: 1
  },
  {
    question: "A 3ª geração romântica recebeu o nome 'condoreira' por:",
    options: [
      "Referência ao condor e aos ideais de liberdade",
      "Exaltação à natureza",
      "Protagonismo do índio",
      "Saudosismo"
    ],
    correct: 0
  },
  {
    question: "Quem escreveu a obra 'O Navio Negreiro'?",
    options: [
      "Castro Alves",
      "José de Alencar",
      "Álvares de Azevedo",
      "Gonçalves Dias"
    ],
    correct: 0
  },
  {
    question: "A 3ª geração romântica é também chamada de:",
    options: [
      "Ultrarromântica",
      "Indianista",
      "Condoreira",
      "Realista"
    ],
    correct: 2
  }
];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
  document.getElementById("start-container").style.display = "none";
  document.getElementById("question-container").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  document.getElementById("question-text").textContent = question.question;

  const options = document.getElementById("answer-options");
  options.innerHTML = ""; // Clear previous options

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    const li = document.createElement("li");
    li.appendChild(button);
    options.appendChild(li);
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correct;

  if (selectedIndex === correctIndex) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
  document.getElementById("score").textContent = score;
  document.getElementById("score-text").textContent = `Você acertou ${score} de ${questions.length}.`;
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("result-container").style.display = "none";
  document.getElementById("start-container").style.display = "block";
}
