"use strict";
const questions = [
    {
        question: "which is largest animal in the world?",
        answers: [
            {text: "shark", correct: false},
            {text: "Blue  whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Girafe", correct: false},
        ]
    },
     {
        question: "which is the smallest country in the world?",
        answers: [
            {text: "Vetican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
     {
        question: "which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true},
        ]
    },
    {
        question: "which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
];

const questionElement = document.querySelector(".que_text");
const answerButton = document.querySelector(".option_list");
const nextButton = document.querySelector(".next_btn");
// const btn = "option";

let currentQuestionIndex = 0;
let score = 0;

// start Quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo  = currentQuestionIndex +  1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
       
        const div = document.createElement("div");
        div.classList.add("option"); //Option  class carries the styles
        const span = document.createElement("span");
        span.innerHTML = answer.text;
        div.appendChild(span);

    // add an icon (e.g., a checkmark or cross)
        if (answer.correct !== undefined) {
            const iconDiv = document.createElement("div");
            iconDiv.classList.add("icon", answer.correct ? "tick" : "cross");

            const ionIcon = document.createElement("ion-icon");
            ionIcon.name = answer.correct ? "checkmark-circle" : "close-circle";

            iconDiv.appendChild(ionIcon);
            div.appendChild(iconDiv);
        }

        answerButton.appendChild(div);
    })
}

startQuiz();

