let userScore = 0;
let computerScore= 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const reset = document.querySelector(".reset");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random () * 3);
    return options [randIdx];
}

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game Was Draw!";
    msg.style.backgroundColor= "#181b31";
};

const showWinner = (userWin, userChoice, computerChoice) => {
 if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor= "green";
 } else {
    computerScore++;
    computerScorePara.innerText = computerScore;
    console.log ("you lose");
    msg.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
    msg.style.backgroundColor= "red";
 }
};

const playGame = (userChoice) => {
   console.log("user choice= ", userChoice);
   //Gernerate Computer Choice
   const computerChoice = genComputerChoice ();
   console.log("computer choice= ", computerChoice);

   if(userChoice === computerChoice) {
   drawGame()
   } else {
      let userWin = true;
      if (userChoice === "rock") {
       userWin = computerChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
       userWin =  computerChoice === "scissors" ? false : true;
      } else {
       userWin = computerChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, computerChoice);
   }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
     playGame(userChoice);
    });
});

reset.addEventListener("click", () => {
      userScore = 0;
      computerScore = 0;
      userScorePara.innerText = userScore;
      computerScorePara.innerText = computerScore;
      msg.innerText = "Let's Play Again!";
      msg.style.backgroundColor= "#181b31";
});