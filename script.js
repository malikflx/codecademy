let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (human, computer, target) => {
  if (Math.abs(human - target) <= Math.abs(computer - target)) {
    return true
  } else {
    return false;
  }
}

const updateScore = score => {
  if (score === 'human') {
    humanScore++;
  } else {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}

// console.log(generateTarget());
// console.log(compareGuesses(2, 4, 3));
