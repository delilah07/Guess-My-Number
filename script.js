'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
let scoreValue = 20;
let highscoreValue = 0;

const minScore = function () {
  if (scoreValue > 1) {
    scoreValue--;
    score.textContent = scoreValue;
  } else {
    message.textContent = '💥 You lost the game';
    document.querySelector('body').classList.add('lose');
  }
};

checkBtn.addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);
  if (!inputValue) {
    message.textContent = '🛑 No number in the input';
    minScore();
  } else if (inputValue > secretNumber) {
    message.textContent = '📈 Too high';
    minScore();
  } else if (inputValue < secretNumber) {
    message.textContent = '📉 Too low';
    minScore();
  } else if (inputValue === secretNumber) {
    message.textContent = '👍 You win';
    number.textContent = secretNumber;
    document.querySelector('body').classList.add('win');
    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
      highscore.textContent = highscoreValue;
    }
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue = 20;
  score.textContent = scoreValue;
  number.textContent = '?';
  message.textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').classList.remove('win');
  document.querySelector('body').classList.remove('lose');
});
