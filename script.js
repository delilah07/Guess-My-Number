'use strict';

let maxNum;
let secretNumber;
const againBtn = document.querySelector('.again');
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const levelBtns = document.querySelectorAll('.level');
const maxNumDiv = document.querySelector('.max-num');
let scoreValue = 20;
let highscoreValue = 0;

const popup = document.querySelector('.popup');
const newLevelBtn = document.querySelector('.new-level');

levelBtns.forEach(levelBtn =>
  levelBtn.addEventListener('click', function () {
    popup.style.display = 'none';
    maxNum = levelBtn.dataset.max;
    displayText(maxNumDiv, maxNum);
    console.log(maxNum);
    secretNumber = randomNum(maxNum);
    return maxNum;
  })
);

function randomNum(max) {
  let num = Math.trunc(Math.random() * max) + 1;
  console.log(num);
  return num;
}
const minScore = function () {
  if (scoreValue > 1) {
    scoreValue--;
    score.textContent = scoreValue;
  } else {
    displayText(message, '💥 You lost the game');
    document.querySelector('body').classList.add('lose');
  }
};
const displayText = function (div, text) {
  div.textContent = text;
};

checkBtn.addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);
  if (inputValue === secretNumber) {
    displayText(message, '👍 You win');
    displayText(number, secretNumber);
    document.querySelector('body').classList.add('win');
    if (scoreValue > highscoreValue) {
      highscoreValue = scoreValue;
      highscore.textContent = highscoreValue;
    }
  } else {
    !inputValue
      ? displayText(message, '🛑 No number in the input')
      : inputValue > secretNumber
      ? displayText(message, '📈 Too high')
      : displayText(message, '📉 Too low');
    minScore();
  }
});

againBtn.addEventListener('click', function () {
  secretNumber = randomNum(maxNum);
  scoreValue = 20;
  score.textContent = scoreValue;
  number.textContent = '?';
  displayText(message, 'Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').classList.remove('win');
  document.querySelector('body').classList.remove('lose');
});

newLevelBtn.addEventListener('click', function () {
  location.reload();
});
