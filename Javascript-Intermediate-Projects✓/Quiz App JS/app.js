
const quizData = [
    {
        question: "1) What is the capital of France?",
        options: ["a) Paris", "b) London", "c) Berlin", "d) Rome"],
        answer: "a) Paris",
    },
    {
        question: "2) What does HTML stand for?",
        options: [
            "a) Hyper Text Markup Language",
            "b) Hyperlinks and Text Markup Language",
            "c) Home Tool Markup Language",
            "d) Hyperlinks and Text Management Language",
        ],
        answer: "a) Hyper Text Markup Language",
    },
    {
        question: '3) Which programming language is known as "the mother of all languages"?',
        options: ["a) C++", "b) Java", "c) Python", "d) Assembly Language"],
        answer: "d) Assembly Language",
    },
    {
        question: " 4) What does CSS stand for?",
        options: [
            "a) Cascading Style Sheets",
            "b) Creative Style Sheets",
            "c) Computer Style Sheets",
            "d) Colorful Style Sheets",
        ],
        answer: "a) Cascading Style Sheets",
    },
    {
        question: " 5) What year was JavaScript created?",
        options: ["a) 1995", "b) 1999", "c) 2001", "d) 2005"],
        answer: "a) 1995",
    },
];

let currentQuestion = 0;
let correctAnswers = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('#answer-button button');
const nextButton = document.getElementById('next-btn');

function displayQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuiz.options[index];
    });
}

function checkAnswer(e) {
    const selectedOption = e.target.textContent;
    const currentQuiz = quizData[currentQuestion];
    if (selectedOption === currentQuiz.answer) {
        // Correct answer
        correctAnswers++;
    }
    // Move to next question
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        // Quiz finished
        endQuiz();
    }
}

function endQuiz() {
    alert(`You scored ${correctAnswers} out of ${quizData.length}`);
}

answerButtons.forEach((button) => {
    button.addEventListener('click', checkAnswer);
});

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        // Quiz finished
        endQuiz();
    }
});

displayQuestion();




