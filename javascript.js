let playerScore = 0;
let computerScore = 0;

let computerText = document.querySelector('#computer-text');
let playerText = document.querySelector('#player-text');

let scoreText = document.querySelector('#score');
let mainInfo = document.querySelector('#main-info');

let buttons = document.querySelector('#button-holder')
buttons.addEventListener('click', (e) => {
  switch (e.target.getAttribute('id')) {
    case 'rock':
      playerText.textContent = 'ROCK';
      playRound('rock');
      break;
    case 'paper':
      playerText.textContent = 'PAPER';
      playRound('paper');
      break;
    case 'scissors':
      playerText.textContent = 'SCISSORS';
      playRound('scissors');
      break;
  }
})

function playRound(playerSelection) {
  console.log(`Selection: ${playerSelection}`);
  let computerSelection = getComputerChoice().toLowerCase();
  computerText.textContent = computerSelection.toUpperCase();

  determineRoundWinner(playerSelection, computerSelection);
  
  if (computerScore == 5 || playerScore == 5) {
    if (computerScore > playerScore) {
      mainInfo.textContent = `COMPUTER WON, ${computerScore} - ${playerScore}, CLICK THE BUTTONS TO PLAY AGAIN`;
    } else {
      mainInfo.textContent = `YOU WON, ${playerScore} - ${computerScore}, CLICK THE BUTTONS TO PLAY AGAIN`;
    }

    playerScore = 0;
    computerScore = 0;
    computerText.textContent = '-';
    playerText.textContent = '-';
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

function determineRoundWinner(playerSelection, computerSelection) {
  let winner = '';
  if (playerSelection == computerSelection) {
    winner = 'tie';
    mainInfo.textContent = 'TIE, NOBODY GETS A POINT';
  } else if (playerSelection === `rock` && computerSelection === `scissors` 
            || playerSelection === `paper` && computerSelection === `rock` 
            || playerSelection === `scissors` && computerSelection === `paper`) {
    playerScore++;
    winner = 'player';
    mainInfo.textContent = 'YOU GET A POINT';
  } else {
    computerScore++;
    winner = 'computer';
    mainInfo.textContent = 'COMPUTER GETS A POINT';
  }

  scoreText.textContent = `${playerScore} - ${computerScore}`;

  return winner;
}
