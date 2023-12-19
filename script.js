// Need to add questions and functionality to application.
var startButton = document.getElementById("start-btn");
var quizEl = document.getElementById("questions")
// timer 
var timer = document.querySelector(".timer")
// Line 37 on....
var answerOption = document.querySelector(".option")

var question = document.querySelector(".que-text")
var timeLeft = 90
var score = 0
var index = 0
function startQuiz() {
    startButton.setAttribute("class", "hide");
    quizEl.removeAttribute("class");
    askQuestion()
}
function askQuestion() {
    var currentQuestion = questionBank[index]
    question.textContent = currentQuestion.question
    document.getElementById("choices").innerHTML = ""
    currentQuestion.options.forEach(function (option) {

        var button = document.createElement("button")
        button.textContent = option
        button.setAttribute("class", "option")
        button.setAttribute("value", option)

        button.addEventListener("click", function () {

            if (this.value === currentQuestion.answer) {
                score++
            }
            else {
                timeLeft -= 10
            }
            index++;
            if (index === questionBank.length) {
                endGame()
            }
            else {
                askQuestion()
            }

        })
        document.getElementById("choices").appendChild(button)

    })
}
function endGame(){
    quizEl.setAttribute("class","hide")
    document.getElementById("quiz-end").classList.remove("hide")

}
startButton.addEventListener("click", startQuiz)
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
        question: "What does HTML stand for?",
        options: [
            "Here to mess up your life",
            "Hyper text markup language",
            "Hard to make look good",
            "Hyper text mode language"
        ],
        answer: "Hyper text markup language"
    },
    {
        question: "How do you start a tag in HTML?",
        options: [
            "//",
            "<!--",
            "<p>",
            "</p>"
        ],
        answer: "<p>"
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
