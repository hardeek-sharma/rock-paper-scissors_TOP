function getComputerChoice() {
  const amountOfOptions = 3;
  numberPicked = (Math.floor(Math.random() * amountOfOptions)) + 1;

  if (numberPicked === 1) {
    return `rock`;
  } else if (numberPicked === 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
}
