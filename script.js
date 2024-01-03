// Start button added
var startButton = document.getElementById("start-btn");
var quizEl = document.getElementById("questions")
var timer = document.querySelector(".timer")
var timeInterval;
var highScores = JSON.parse(localStorage.getItem("highScores")) || []
var answerOption = document.querySelector(".option")
var question = document.querySelector(".que-text")
var timeLeft = 60
var score = 0
var index = 0
function startQuiz() {
    startButton.setAttribute("class", "hide");
    quizEl.removeAttribute("class");
    //Set interval for function
    timeInterval = setInterval(runTimer, 1000)
    askQuestion()
}
//Function added to call question.
function askQuestion() {
    var currentQuestion = questionBank[index]
    question.textContent = currentQuestion.question
    document.getElementById("choices").innerHTML = ""
    currentQuestion.options.forEach(function (option) {

        var button = document.createElement("button")
        button.textContent = option
        button.setAttribute("class", "option")
        button.setAttribute("value", option)
        // Event Listener added to call Button click.
        button.addEventListener("click", function () {
// If elese statement added will deduct 10 seconds for wrong answers.
            if (this.value === currentQuestion.answer) {
                score++
            }
            else {
                timeLeft -= 10
                if (
                    timeLeft <= 0
                ) {
                    endGame()
                }
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
function endGame() {
    quizEl.setAttribute("class", "hide")
    document.getElementById("quiz-end").classList.remove("hide")

}
//Function added to zero timer without going negative in number.
function runTimer() {
    timeLeft--;
    if (timeLeft < 0) {
        timeLeft = 0
        endGame()
    }
    timer.textContent = timeLeft
}
// Function added to save the score at the end with initials.
function saveScore() {
    var finalScore = score * timeLeft
    var initials = document.getElementById("initials").value
    var scoreObject = {
        finalScore, initials
    }
    highScores.push(scoreObject)
    localStorage.setItem("highScores", JSON.stringify(highScores))
    displayScores()
}
// Function added to display scores high to low at end of quiz.
function displayScores() {
    highScores.sort(function (a, b) {
        return b.finalScore - a.finalScore
    })
    document.getElementById("quiz-end").classList.add("hide")
    document.getElementById("highScores").classList.remove("hide")
    for (var i = 0; i < highScores.length; i++) {
        var li = document.createElement("li")
        li.textContent = highScores[i].initials + " " + highScores[i].finalScore
        document.getElementById("scoreList").appendChild(li)
    }
}
//Added event listener for button click to begin quiz.
startButton.addEventListener("click", startQuiz)
document.getElementById("save-score").addEventListener("click", saveScore)
// Questions to be called by javascript during quiz.
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
        question: "How do you add a comment to HTML?",
        options: [
            "//",
            "<!--",
            "/*",
            "</>"
        ],
        answer: "<!-->"
    },
    {
        question: "What language is used to add styling?",
        options: [
            "HTML",
            "Javascript",
            "Dayjs",
            "CSS"
        ],
        answer: "CSS"
    }
    


]
