//alert('connect');

/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if lose
- Let player choose to play again
*/

// Game values
let min = 1,  
    max = 10,
    winningNum = 2,
    guessLeft = 3;

// UI elements
const game = document.querySelector('#game'),
         minNum = document.querySelector('.min-num'),
         maxNum = document.querySelector('.max-num'),
         guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message');

// Asign UI min and max
minNum.textContent = min;
max-num.textContent = max;
 