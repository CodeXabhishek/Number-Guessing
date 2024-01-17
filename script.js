'use strict';
/* Creating a secret number */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

/** @description checking the input value */

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('No Number');
  } else if (guess > 20) {
    displayMessage('Choose a number from 1 to 20');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number...');
    document.querySelector('body').style.backgroundColor = 'blue';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lose The Game,,,');
      document.querySelector('.score').textContent = 0;
    }
  }
});

/** @description Reseting page function */

function valueReset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '🔐';
  // document.querySelector('.message').textContent = 'start guessing...';
  displayMessage('start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = highscore;

  document.querySelector('.guess').value = '';
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  valueReset();
});
document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  highscore = 0;
  valueReset();
});
