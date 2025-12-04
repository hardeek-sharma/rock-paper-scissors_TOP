alert(`To start the game go to console and enter:
       playGame()`)

let humanScore = 0;
let computerScore = 0;
let amountOfRounds = 5;

function playGame() {
  humanScore = 0;
  computerScore = 0;
  amountOfRounds = 5;

  for(i = 1; i <= amountOfRounds; i++) {
    playRound();
  }

  alert(`Final Scores
    Human: ${humanScore} Computer: ${computerScore}`)
}

function playRound() {
  let humanSelection = getHumanChoice().toLowerCase();
  let computerSelection = getComputerChoice().toLowerCase();

  checkInput(humanSelection);

  determineWinner(humanSelection, computerSelection);
}

function getHumanChoice() {
  return prompt(`rock, paper, or scissors: `, ``)
}

function getComputerChoice() {
  const amountOfOptions = 3;
  let numberPicked = (Math.floor(Math.random() * amountOfOptions)) + 1;

  if (numberPicked === 1) {
    return `rock`;
  } else if (numberPicked === 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

function determineWinner(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    alert(`The computer picked ${computerSelection}
           Tie`);
    amountOfRounds++;
  } else if (humanSelection === `rock` && computerSelection === `scissors` 
    || humanSelection === `paper` && computerSelection === `rock` 
    || humanSelection === `scissors` && computerSelection === `paper`) {
    alert(`The computer picked ${computerSelection}
           You beat the computer`);
    humanScore++;
  } else {
    alert(`The computer picked ${computerSelection}
           You lose`);
    computerScore++;
  }
}

function checkInput(input) {
  if (input !== `rock` || input !== `paper` || input !== `scissors`) {
    amountOfRounds++;

    alert(`INPUT NOT VALID
           Please enter either: 
           'rock', 'paper', or 'scissors'`);
  }
}
