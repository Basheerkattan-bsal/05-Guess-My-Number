'use strict';

/* document.querySelector('.message').textContent = '🎉 Correct Number !';
console.log(document.querySelector('.message').textContent);

// The secret number
document.querySelector('.number').textContent = 10;

// The score element

document.querySelector('.score').textContent = 12;

// The input element

document.querySelector('.guess').value = 40;
console.log(document.querySelector('.guess').value);
 */

// ? Defining the secret number

let secretNumber = Math.trunc(Math.random() * 20) + 1; // ! plus one is to let the random number reach 20.

// ? Defining the score element

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Handing the check button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // ? When there is no number

  if (!guess) {
    displayMessage('✋ Please insert a Number !!');
    console.log(message);

    // ? When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    console.log(secretNumber);

    const body = document.body;
    body.style.backgroundColor = '#60b347';

    const numberBox = document.querySelector('.number');
    numberBox.style.width = '40rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // ? When the guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      Number((document.querySelector('.score').textContent = score));
    } else {
      displayMessage('💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// ! Start new guess

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = ' rgb(41, 41, 44)';
});
