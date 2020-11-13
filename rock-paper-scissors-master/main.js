const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let rulesBtn = document.querySelector(".rules-btn");
let rules = document.querySelector(".rules");
let close = document.querySelector(".times");
let score = document.querySelector(".score");
function main() {
  rock.addEventListener("click", function () {
    game("r");
  });

  paper.addEventListener("click", function () {
    game("p");
  });

  scissors.addEventListener("click", function () {
    game("s");
  });
}

function getComputerChoice() {
  let choice = ["r", "p", "s"];
  let rng = Math.floor(Math.random() * 3);
  return choice[rng];
}
let result;
function game(userChoice) {
  computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      result = "win";
      console.log(result);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      result = "lose";
      console.log(result);
      break;
    case "rr":
    case "pp":
    case "ss":
      tie(userChoice, computerChoice);
      result = "tie";
      console.log(result);
      break;
  }
}

let totalScore = localStorage.getItem("score");
score.innerHTML = totalScore;
window.localStorage.setItem("uChoice", "");
window.localStorage.setItem("cChoice", "");

function win(choice) {
  totalScore++;
  console.log(
    "You win, you picked " +
      choice +
      " and the computer picked " +
      computerChoice +
      "." +
      " Your score is " +
      totalScore
  );
  window.localStorage.setItem("score", totalScore);
  window.localStorage.setItem("uChoice", choice);
  window.localStorage.setItem("cChoice", computerChoice);
  window.localStorage.setItem("result", "win");
}

function lose(choice) {
  totalScore--;
  console.log(
    "You lost, you picked " +
      choice +
      " and the computer picked " +
      computerChoice +
      "." +
      " Your score is " +
      totalScore +
      "."
  );
  window.localStorage.setItem("score", totalScore);
  window.localStorage.setItem("uChoice", choice);
  window.localStorage.setItem("cChoice", computerChoice);
  window.localStorage.setItem("result", "lose");
}

function tie(choice) {
  console.log(
    "You tied, you picked " +
      choice +
      " and the computer picked " +
      computerChoice +
      "." +
      " Your score is " +
      totalScore +
      "."
  );
  window.localStorage.setItem("score", totalScore);
  window.localStorage.setItem("uChoice", choice);
  window.localStorage.setItem("cChoice", computerChoice);
  window.localStorage.setItem("result", "tie");
}
main();
//Rules button
rulesBtn.addEventListener("click", function () {
  rules.classList.add("active");
});

close.addEventListener("click", function () {
  rules.classList.remove("active");
});
