'use strict';

// Range of score
let scoreValue = 20;

// Guessing number
let secretNumber = Math.trunc(Math.random() * scoreValue) + 1;

let highScore = 0;

const setTextContent = function (className, element) {
  document.querySelector(className).textContent = element;
};

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When guess is not valid
  if (!guess) {
    setTextContent('.message', 'Please, Enter a valid number !');
  }
  // When guess is correct
  else if (guess === secretNumber) {
    setTextContent('.number', secretNumber);
    setTextContent('.message', 'Correct Number 🥳');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoreValue > highScore) highScore = scoreValue;
    setTextContent('.highscore', highScore);
  }
  // When the answer is wrong
  else if (guess !== secretNumber) {
    if (scoreValue > 1) {
      guess > secretNumber
        ? setTextContent('.message', 'Too High 😛!')
        : setTextContent('.message', 'Too Low 🥱!');
      setTextContent('.score', --scoreValue);
    } else {
      setTextContent('.message', 'You lost the game 😣!');
      setTextContent('.score', 0);
    }
  }
});

// Again Button (Resetting all the values again ...)
document.querySelector('.again').addEventListener('click', function () {
  scoreValue = 20;
  secretNumber = Math.trunc(Math.random() * scoreValue) + 1;
  setTextContent('.number', '?');
  setTextContent('.message', 'Start guessing...');
  setTextContent('.score', scoreValue);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
