const questions = [
    // Perguntas da 1ª Geração Romântica
    {
        question: "Quem é o principal autor da 1ª Geração Romântica no Brasil?",
        options: ["Gonçalves Dias", "José de Alencar", "Castro Alves", "Álvares de Azevedo"],
        correctAnswer: 0
    },
    {
        question: "Qual o principal tema da 1ª Geração Romântica?",
        options: ["Nacionalismo", "Sentimentalismo", "Socialismo", "Absolutismo"],
        correctAnswer: 1
    },
    {
        question: "Qual a obra mais conhecida de Gonçalves Dias?",
        options: ["O Primo Basílio", "Canção do Exílio", "Iracema", "Senhora"],
        correctAnswer: 1
    },
    {
        question: "Qual é o nome do movimento literário que deu origem à 1ª Geração Romântica?",
        options: ["Arcadismo", "Realismo", "Romantismo", "Modernismo"],
        correctAnswer: 2
    },

    // Perguntas da 2ª Geração Romântica
    {
        question: "Quem é o principal autor da 2ª Geração Romântica no Brasil?",
        options: ["José de Alencar", "Castro Alves", "Machado de Assis", "Álvares de Azevedo"],
        correctAnswer: 1
    },
    {
        question: "A 2ª Geração Romântica tem como principal característica o:",
        options: ["Sentimentalismo", "Condoreirismo", "Nacionalismo", "Realismo"],
        correctAnswer: 1
    },
    {
        question: "Qual a obra mais conhecida de Castro Alves?",
        options: ["Iracema", "O Primo Basílio", "O Navio Negreiro", "Senhora"],
        correctAnswer: 2
    },
    {
        question: "Castro Alves é conhecido como:",
        options: ["Poeta do Amor", "Poeta do Exílio", "Poeta dos Escravos", "Poeta das Águas"],
        correctAnswer: 2
    },

    // Perguntas da 3ª Geração Romântica
    {
        question: "Quem é o principal autor da 3ª Geração Romântica no Brasil?",
        options: ["Machado de Assis", "Álvares de Azevedo", "Raul Pompeia", "Bernardo Guimarães"],
        correctAnswer: 0
    },
    {
        question: "A 3ª Geração Romântica no Brasil é marcada principalmente pelo:",
        options: ["Sentimentalismo", "Pessimismo e Realismo", "Amor idealizado", "Enfoque na natureza"],
        correctAnswer: 1
    },
    {
        question: "Qual a principal obra de Machado de Assis da 3ª Geração Romântica?",
        options: ["Memórias Póstumas de Brás Cubas", "Dom Casmurro", "O Primo Basílio", "O Cortiço"],
        correctAnswer: 0
    },
    {
        question: "O que caracteriza o estilo de Álvares de Azevedo?",
        options: ["O Pessimismo", "O Nacionalismo", "A Ideologia Liberal", "O Idealismo"],
        correctAnswer: 0
    },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.getElementById('options').children;
    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.innerHTML = currentQuestion.question;
    for (let i = 0; i < 4; i++) {
        options[i].innerHTML = currentQuestion.options[i];
    }
}

function nextQuestion(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById('question-container').classList.add('hidden');
    const resultElement = document.getElementById('result');
    document.getElementById('score').innerText = `Seu Resultado: ${score} de ${questions.length}`;
    resultElement.classList.remove('hidden');
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    document.getElementById('result').classList.add('hidden');
    document.getElementById('question-container').classList.remove('hidden');
}

// Adicionando o evento que chama a função 'loadQuestion' após o DOM ser carregado
document.addEventListener('DOMContentLoaded', loadQuestion);
