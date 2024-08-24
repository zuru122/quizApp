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
const answerButtons = document.querySelector(".option_list");
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
    resetState()
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo  = currentQuestionIndex +  1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
       
        const div = document.createElement("div");
        div.classList.add("option"); //Option  class carries the styles
        const span = document.createElement("span");
        span.innerHTML = answer.text;
        div.appendChild(span);

    // add an icon (i.e. a checkmark or cross)
        // if (answer.correct !== undefined) {
        //     const iconDiv = document.createElement("div");
        //     iconDiv.classList.add("icon", answer.correct ? "tick" : "cross");

        //     const ionIcon = document.createElement("ion-icon");
        //     ionIcon.name = answer.correct ? "checkmark-circle" : "close-circle";

        //     iconDiv.appendChild(ionIcon);
        //     div.appendChild(iconDiv);
        // }

        answerButtons.appendChild(div);
        
        div.dataset.correct = answer.correct;
    
        div.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.currentTarget;
    const isCorrect = selectedBtn.dataset.correct === "true";

    console.log("Selected Button:", selectedBtn);
    console.log("Data Correct Value:", selectedBtn.dataset.correct);
    console.log("Is Correct?", isCorrect);

    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    
}
startQuiz();

