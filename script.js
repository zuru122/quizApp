"use strict";
import {questions} from "./questions.js"
// const questions = [
//     {
//         question: "which is largest animal in the world?",
//         answers: [
//             {text: "shark", correct: false},
//             {text: "Blue  whale", correct: true},
//             {text: "Elephant", correct: false},
//             {text: "Girafe", correct: false},
//         ]
//     },
//      {
//         question: "which is the smallest country in the world?",
//         answers: [
//             {text: "Vetican City", correct: true},
//             {text: "Bhutan", correct: false},
//             {text: "Nepal", correct: false},
//             {text: "Shri Lanka", correct: false},
//         ]
//     },
//      {
//         question: "which is the largest desert in the world?",
//         answers: [
//             {text: "Kalahari", correct: false},
//             {text: "Gobi", correct: false},
//             {text: "Sahara", correct: false},
//             {text: "Antartica", correct: true},
//         ]
//     },
//     {
//         question: "which is the smallest continent in the world?",
//         answers: [
//             {text: "Asia", correct: false},
//             {text: "Australia", correct: true},
//             {text: "Arctic", correct: false},
//             {text: "Africa", correct: false},
//         ]
//     },
// ];
const startButton = document.querySelector(".start_btn");
const  info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const questionElement = document.querySelector(".que_text");
const answerButtons = document.querySelector(".option_list");
const nextButton = document.querySelector(".next_btn");

// variable for question  count
let currentNo = document.querySelector(".currentNo");
let totalNo = document.querySelector(".totalNo");
let totalQuestionElement  =  document.querySelector(".totalQuestion");
totalQuestionElement.textContent =  questions.length;


// Result box
const finalScore = document.querySelector(".score");
const result_box =  document.querySelector(".result_box")

// const btn = "option";

let currentQuestionIndex = 0;
let score = 0;

// Timer
let timeLeft  = 15;
let timerInterval;
// Start Button

startButton.addEventListener("click", ()=>{
    startButton.style.display = "none";
    info_box.style.display = "block";
  

})

// Button
function setupButtonListeners() {
    document.querySelectorAll(".check").forEach(check => {
        check.addEventListener("click", function(e) {
            const clickedBtn = e.currentTarget;
            if (clickedBtn.classList.contains("quit")) {
                startButton.style.display = "block";
                info_box.style.display = "none";
                result_box.style.opacity = 0;
                 result_box.style.zIndex = -1;
                 startQuiz();


            } else if (clickedBtn.classList.contains("restart")) {
                info_box.style.display = "none";
                quiz_box.style.display = "block";
                result_box.style.opacity = 0;
                result_box.style.zIndex = -1;
                startQuiz();
            }
        });
    });
}
setupButtonListeners();



function displayResult(){
    quiz_box.style.display = "none";
    finalScore.textContent = score;
    // totalNo.textContent = questions.length;
    result_box.style.opacity = 1;
    result_box.style.zIndex = 0;


}

// start Quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    // nextButton.innerHTML = "Next";
    // Question count
    currentNo.textContent = currentQuestionIndex;
    totalNo.textContent = questions.length;
    showQuestion();
}



function showQuestion(){
    resetState()
    let currentQuestion  = questions[currentQuestionIndex];
    let questionNo  = currentQuestionIndex +  1;
    // increase question count
    currentNo.textContent ++
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


    currentQuestion.answers.forEach(answer =>{
       
        const div = document.createElement("div");
        div.classList.add("option"); //Option  class carries the styles
        const span = document.createElement("span");
        span.innerHTML = answer.text;
        div.appendChild(span);

        answerButtons.appendChild(div);
        
        div.dataset.correct = answer.correct;
    
        div.addEventListener("click", selectAnswer);
    })
    startTimer();
}

// Timer Function
// Timer Function
function startTimer() {
    let timeLeft = 15;  
    const timerElement = document.querySelector(".timer_sec");
    const timerBar = document.querySelector(".timer_bar");
    timerElement.textContent = timeLeft;

    clearInterval(timerInterval);  

    timerBar.style.width = "100%";
    let widthDecrement = 100 / timeLeft;
    let currentWidth = 100; 

    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = timeLeft;

        currentWidth -= widthDecrement;  
        timerBar.style.width = currentWidth + "%";

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeExpiry();  
        }
    }, 1000);
}



function highlightCorrectAnswer(){
    Array.from(answerButtons.children).forEach(div => {
        if (div.dataset.correct === "true") {
            div.classList.add("correct");
            const iconDiv = document.createElement("div");
            iconDiv.classList.add("icon", "tick"); 
        
            const ionIcon = document.createElement("ion-icon");
            ionIcon.name = "checkmark-circle";
            
            // Check if the icon has already been added
            if (!div.querySelector('.tick')) {
                iconDiv.appendChild(ionIcon);
                div.appendChild(iconDiv);
            }
        }
        
        div.classList.add("disabled");
        div.removeEventListener("click", selectAnswer);
    });

    nextButton.style.display = "block";
}

function handleTimeExpiry(){
    // disable all answer buttons when time is up
    highlightCorrectAnswer();
}


function resetState(){
    clearInterval(timerInterval)
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    // update question  number
    //  currentNo.textContent ++;

    clearInterval(timerInterval);


    const selectedBtn = e.currentTarget;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Add an icon (i.e. a checkmark or cross)

    const iconDiv = document.createElement("div");
    iconDiv.classList.add("icon", isCorrect ? "tick" : "cross");

    const ionIcon = document.createElement("ion-icon");
    ionIcon.name = isCorrect ? "checkmark-circle" : "close-circle";

    iconDiv.appendChild(ionIcon);
    selectedBtn.appendChild(iconDiv);

    // Add the correct/incorrect class to the selected button
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    highlightCorrectAnswer();

}

function showScore(){
    resetState()
    displayResult()
    setupButtonListeners();

}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        console.log(score);
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

 startQuiz();
