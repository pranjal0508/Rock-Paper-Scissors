// 0 means Rock, 1 means Paper and 2 means Scissors
let arr = ["rock", 'paper', 'scissors'];
let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");

console.log(choices);

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let compChoice = arr[parseInt(Math.random() * 3)];
        console.log("Computer's Choice : ",compChoice);
        let userChoice = choice.getAttribute("id");
        console.log("User's Choice : ",userChoice);
        result(userChoice, compChoice);

    })
})

function result(userChoice, compChoice) {
    if (compChoice === userChoice) {
        msg.innerText = "It's a draw";
        msg.style.backgroundColor = "darkgrey";
    }
    else if (compChoice == "rock" && userChoice == "paper" || compChoice == "paper" && userChoice == "rock") {
        msg.innerText = "Paper beats Rock";
        if (userChoice == "paper") {
            win();
        } else {
            lose();
        }
    }
    else if (compChoice == "rock" && userChoice == "scissors" || compChoice == "scissors" && userChoice == "rock") {
        msg.innerText = "Rock beats Scissors";
        if (userChoice == "rock") {
            win();
        } else {
            lose();
        }
    }
    else if (compChoice == "paper" && userChoice == "scissors" || compChoice == "scissors" && userChoice == "paper") {
        msg.innerText = "Scissors beats Paper";
        if (userChoice == "scissors") {
            win();
        } else {
            lose();
        }
    }
}

let userScoreEle = document.querySelector("#user-score");
let compScoreEle = document.querySelector("#comp-score");

function lose() {
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreEle.innerText = compScore;
}

function win() {
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreEle.innerText = userScore;
}

let resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
    location.reload();
})