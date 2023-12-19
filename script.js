// Need to add questions and functionality to application.
var startButton = document.getElementById("start-btn");
// timer 
var timer = document.querySelector(".timer")
// Line 37 on....
var answerOption = document.querySelector(".option")

var question = document.querySelector(".que-text")
var timeLeft = 90

function startQuiz(){
console.log()
}
startButton.addEventListener("click",startQuiz)
// add actual questions later
//move to end later
var questionBank = [
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading style sheets",
            "Custom style sheet",
            "Cant steal snickers",
            "Caught stealing soup"
        ],
        answer: "Cascading style sheets"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading style sheets",
            "Custom style sheet",
            "Cant steal snickers",
            "Caught stealing soup"
        ],
        answer: "Cascading style sheets"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading style sheets",
            "Custom style sheet",
            "Cant steal snickers",
            "Caught stealing soup"
        ],
        answer: "Cascading style sheets"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading style sheets",
            "Custom style sheet",
            "Cant steal snickers",
            "Caught stealing soup"
        ],
        answer: "Cascading style sheets"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading style sheets",
            "Custom style sheet",
            "Cant steal snickers",
            "Caught stealing soup"
        ],
        answer: "Cascading style sheets"
    }

]
