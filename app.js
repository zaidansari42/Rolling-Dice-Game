'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, playing, currentScore, currentPlayer;

const initialize = function () {
  diceEl.classList.add('hidden');

  scores = [0, 0];

  [score0El.textContent, score1El.textContent] = scores;

  playing = true;

  currentPlayer = 0;

  currentScore = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  document.getElementById('name--0').textContent = 'PLAYER 1';
  document.getElementById('name--1').textContent = 'PLAYER 2';

  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};

initialize();

const rollDice = function () {
  if (playing) {
    // Making the hidden dice visible
    diceEl.classList.remove('hidden');

    //   Generating random dice between 1 and 6
    const dice = Math.trunc(Math.random() * 6 + 1);

    diceEl.setAttribute('src', `images/dice-${dice}.png`);

    if (dice !== 1) {
      currentScore += dice;

      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${currentPlayer}`).textContent =
    currentScore;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');

  currentPlayer = currentPlayer === 0 ? 1 : 0;
};

const holdDice = function () {
  scores[`${currentPlayer}`] += currentScore;

  document.getElementById(`score--${currentPlayer}`).textContent =
    scores[`${currentPlayer}`];

  currentScore = 0;
  current0El.textContent = 0;

  if (scores[`${currentPlayer}`] >= 10) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');

    document.getElementById(`name--${currentPlayer}`).textContent = `Player ${
      currentPlayer + 1
    } WINS!`;

    playing = false;

    diceEl.classList.add('hidden');
  } else {
    switchPlayer();
  }
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);
btnNew.addEventListener('click', initialize);
