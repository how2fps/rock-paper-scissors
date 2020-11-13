let rulesBtn = document.querySelector(".rules-btn");
let rules = document.querySelector(".rules");
let close = document.querySelector(".times");
let userChoiceDiv = document.querySelector(".user-choice");
let computerChoiceDiv = document.querySelector(".computer-choice");
let resultText = document.querySelector(".result-text");
let playBtn = document.querySelector(".play-btn");
rulesBtn.addEventListener("click", function () {
  rules.classList.add("active");
});

close.addEventListener("click", function () {
  rules.classList.remove("active");
});

score = document.querySelector(".score");
console.log(localStorage.getItem("score"));
score.innerHTML = localStorage.getItem("score");
let userChoice = localStorage.getItem("uChoice");
let computerChoice = localStorage.getItem("cChoice");
let result = localStorage.getItem("result");

console.log(userChoice);
console.log(computerChoice);
console.log(result);

function displayUserChoice(userChoice) {
  switch (userChoice) {
    case "r":
      userChoiceDiv.innerHTML = showRock;
      break;
    case "p":
      userChoiceDiv.innerHTML = showPaper;
      break;
    case "s":
      userChoiceDiv.innerHTML = showScissors;
      break;
  }
}

function displayComputerChoice(computerChoice) {
  switch (computerChoice) {
    case "r":
      computerChoiceDiv.innerHTML = showRock;
      break;
    case "p":
      computerChoiceDiv.innerHTML = showPaper;
      break;
    case "s":
      computerChoiceDiv.innerHTML = showScissors;
      break;
  }
}

function displayResult(result) {
  switch (result) {
    case "win":
      resultText.innerHTML = "You win";
      userChoiceDiv.classList.add("highlight");
      break;
    case "lose":
      resultText.innerHTML = "You lose";
      computerChoiceDiv.classList.add("highlight");
      break;
    case "tie":
      resultText.innerHTML = "You tied";
      userChoiceDiv.classList.add("highlight");
      computerChoiceDiv.classList.add("highlight");
      break;
  }
}

const showRock =
  "<div class='options-container2 rock' id='rock'>" +
  "<img class='options' src='/images/icon-rock.svg' alt=''>" +
  "</div>";

const showPaper =
  "<div class='options-container2 paper' id='paper'>" +
  "<img class='options' src='/images/icon-paper.svg' alt=''>" +
  "</div>";

const showScissors =
  "<div class='options-container2 scissors' id='scissors'>" +
  "<img class='options' src='/images/icon-scissors.svg' alt=''>" +
  "</div>";

displayUserChoice(userChoice);
displayComputerChoice(computerChoice);
displayResult(result);
