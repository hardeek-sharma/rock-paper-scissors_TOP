/*
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

  if (checkInput(humanSelection)) {
    determineWinner(humanSelection, computerSelection);
  } else {
    amountOfRounds++;

    alert(`INPUT NOT VALID
           Please enter either: 
           'rock', 'paper', or 'scissors'`);
  }
  
}

function getHumanChoice() {
  return prompt(`rock, paper, or scissors: `)
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
  if (input === `rock` || input === `paper` || input === `scissors`) {
    return true;
  }

  return false;
}
*/

let humanScore = 0;
let computerScore = 0;

let robotText = document.querySelector('#robot-text');
let humanText = document.querySelector('#you-text');

let scoreText = document.querySelector('#score');
let mainInfo = document.querySelector('#main-info');

let buttons = document.querySelector('#button-holder')
buttons.addEventListener('click', (e) => {
  switch (e.target.getAttribute('id')) {
    case 'rock':
      humanText.textContent = 'ROCK';
      playRound('rock');
      break;
    case 'paper':
      humanText.textContent = 'PAPER';
      playRound('paper');
      break;
    case 'scissors':
      humanText.textContent = 'SCISSORS';
      playRound('scissors');
      break;
  }
})

function playRound(humanSelection) {
  console.log(`Selection: ${humanSelection}`);
  let computerSelection = getComputerChoice().toLowerCase();
  robotText.textContent = computerSelection.toUpperCase();

  let winner = determineRoundWinner(humanSelection, computerSelection);
  
  if (computerScore == 5 || humanScore == 5) {
    if (computerScore > humanScore) {
      mainInfo.textContent = `COMPUTER WON, ${computerScore} - ${humanScore}, CLICK THE BUTTONS TO PLAY AGAIN`;
    } else {
      mainInfo.textContent = `COMPUTER WON, ${humanScore} - ${computerScore}, CLICK THE BUTTONS TO PLAY AGAIN`;
    }

    humanScore = 0;
    computerScore = 0;
    robotText.textContent = '-';
    humanText.textContent = '-';
    scoreText.textContent = '0 - 0';
  }
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

function determineRoundWinner(humanSelection, computerSelection) {
  let winner = '';
  if (humanSelection == computerSelection) {
    winner = 'tie';
    mainInfo.textContent = 'TIE, NOBODY GETS A POINT';
  } else if (humanSelection === `rock` && computerSelection === `scissors` 
            || humanSelection === `paper` && computerSelection === `rock` 
            || humanSelection === `scissors` && computerSelection === `paper`) {
    humanScore++;
    winner = 'human';
    mainInfo.textContent = 'YOU GET A POINT';
  } else {
    computerScore++;
    winner = 'robot';
    mainInfo.textContent = 'ROBOT GETS A POINT';
  }

  scoreText.textContent = `${humanScore} - ${computerScore}`;

  return winner;
}
