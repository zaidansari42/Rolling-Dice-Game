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

diceEl.classList.add('hidden');

let scores = [0, 0];

[score0El.textContent, score1El.textContent] = scores;

const rollDice = function () {
  // Making the hidden dice visible
  diceEl.classList.remove('hidden');

  //   Generating random dice between 1 and 6
  const dice = Math.trunc(Math.random() * 6 + 1);

  diceEl.setAttribute('src', `images/dice-${dice}.png`);
};

btnRoll.addEventListener('click', rollDice);
