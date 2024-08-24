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
const startButton = document.querySelector(".start_btn");
const  info_box = document.querySelector(".info_box");
const quiz_box = document.querySelector(".quiz_box");
const questionElement = document.querySelector(".que_text");
const answerButtons = document.querySelector(".option_list");
const nextButton = document.querySelector(".next_btn");

// variable for question  count
let currentNo = document.querySelector(".currentNo");
let totalNo = document.querySelector(".totalNo");



// const btn = "option";

let currentQuestionIndex = 0;
let score = 0;

// Start Button

startButton.addEventListener("click", ()=>{
    startButton.style.display = "none";
    info_box.style.display = "block";

})

// Button
document.querySelectorAll(".check").forEach(check=>{
    check.addEventListener("click", function(e){
        const clickedBtn = e.currentTarget;
        if (clickedBtn.classList.contains("quit")){
            startButton.style.display = "block";
            info_box.style.display = "none";
        }
        else if (clickedBtn.classList.contains("restart")){
            info_box.style.display = "none";
            quiz_box.style.display = "block";

        }

    })
})




// start Quiz
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
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
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    // update question  number
    //  currentNo.textContent ++;


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

   

   Array.from(answerButtons.children).forEach(div => {
    // Check if the answer is correct and apply the correct class
    if (div.dataset.correct === "true") {
        div.classList.add("correct");
    }
    div.classList.add("disabled"); 
    div.removeEventListener("click", selectAnswer);
});

nextButton.style.display = "block";

}

function showScore(){
    resetState()
    questionElement.innerHTML = `you scored ${score} out od ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
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
