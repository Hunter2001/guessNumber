'use strict';

// ----------------random 1-2x function----------------------
const random = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

//--------------------------defining the variables----------------------------
let secretNumber = random();
let score = 20;
let win = false;
let loose = false;
let highScore = 0;

// -------------display functions----------------
const display = {
  message: function (message) {
    document.querySelector('.message').textContent = message;
  },
  number: function (number) {
    document.querySelector('.number').textContent = number;
  },
  highScore: function (highScore) {
    document.querySelector('.highscore').textContent = highScore;
  },
  score: function (score) {
    document.querySelector('.score').textContent = score;
  },
};

//-----------------log secret number to console---------------------
console.log(secretNumber);

// -------------------game logic--------------------
if (!win && !loose) {
  document.querySelector('.check').addEventListener('click', function () {
    const guess = +document.querySelector('.guess').value;
    console.log(guess, typeof guess);

    // ------------------when there's no input--------------------
    if (!guess & !win) {
      display.message('⛔ No Number!');

      // --------------------when i win------------------------
    } else if ((secretNumber === guess) & !win) {
      display.message('🏆 You win');
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      display.number(secretNumber);
      if (score > highScore) highScore = score;
      display.highScore(highScore);
      return (win = true);

      // --------------------when guess is wrong------------------------
    } else if ((secretNumber !== guess) & !win) {
      display.message(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      display.score(score);
    }
    // --------------------when you loose------------------------
    if (score < 1) {
      score = 0;
      display.score(score);
      loose = true;
      return (document.querySelector('.message').textContent =
        '🤦‍♀️ You lost, play again!');
    }

    // --------------------when you win and clicking still------------------------
    if (win) {
      document.querySelector('.message').textContent = '🔁 Wanna play again?';
    }
  });
}

// ---------------------implement again button functionality-----------------------------------
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  win = false;
  loose = false;
  secretNumber = random();
  console.log(secretNumber);
  display.message('🔰 Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  display.number('?');
  document.querySelector('.guess').value = '';
  display.score(score);
});
