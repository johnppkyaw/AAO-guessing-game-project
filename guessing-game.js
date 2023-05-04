//Create interfac for input and output using Node's readline module
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Start the game
askRange(); //must be uncommented to start the game.

let secretNumber;
let numAttempts;

function askRange() {
  let max;
  let min;
  rl.question('Enter a max number : ', maxAnswerHandler);
  function maxAnswerHandler(answer1) {
    max = Number(answer1);
    rl.question('Enter a min number: ', minAnswerHandler)
  }
  function minAnswerHandler(answer2) {
    min = Number(answer2);
    console.log (`I\'m thinking of a number between ${min} and ${max}...`);
    secretNumber = randomInRange(min, max);
    rl.question('How many attempts would you like to have?: ', attemptAnswerHandler)
  }
  function attemptAnswerHandler(attempts) {
    numAttempts = attempts;
    console.log(`You have ${attempts} guesses.  Good luck!`);
    //Guessing starts
    askGuess();
  }
}

const askGuess = function() {
rl.question('Enter a guess: ', (answer) => {
  let correct = checkGuess(Number(answer));
  if (correct) {
    console.log('You win!');
    rl.close();
  } else {
    //if guessed wrong, guess again;
    numAttempts--;
    if (numAttempts > 0) {
      console.log(`You can guess ${numAttempts} more`);
      askGuess();
    } else {
      console.log('You Lose. :(');
      rl.close();
    }
  }
});
};

//random number generator; max exclusive; min inclusive;
function randomInRange(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function checkGuess(number) {
  if (number > secretNumber) {
    console.log('Too high');
    return false;
  } else if (number < secretNumber) {
    console.log('Too low');
    return false;
  } else {
    console.log('Correct!');
    return true;
  }
}

// console.log(checkGuess(10)) //too high; false;
// console.log(checkGuess(0)) //too low; false;
// console.log(checkGuess(5)) //correct; true;
