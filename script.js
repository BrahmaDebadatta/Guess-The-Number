'use strict';
// console.log(document.querySelector(`.message`).textContent);

// document.querySelector(`.message`).textContent = `correct number`;
// //document.querySelector(`.between`).textContent = `between 2 and 40`;
// console.log(document.querySelector(`.message`).textContent);
// document.querySelector(`.number`).textContent = 13;
// document.querySelector(`.score`).textContent = 15;
// document.querySelector(`.guess`).value = 34;

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  //console.log(typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector(`.message`).textContent = `ð¤no number!`;

    // when player win
  } else if (guess === number) {
    document.querySelector(`.message`).textContent = `Correct Guess ð`;
    document.querySelector(`.number`).textContent = number;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }

    // when the number is less
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too low ð`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = 'You lost the Game';
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#FF0000`;
    }

    // when number is high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(`.message`).textContent = `Too High ð£`;
      score--;
      document.querySelector(`.score`).textContent = score;
    } else {
      document.querySelector(`.message`).textContent = 'You lost the Game';
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#FF0000`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`.message`).textContent = `Start guessing....`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});
