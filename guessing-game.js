//Create interfac for input and output using Node's readline module
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askGuess = function() {
rl.question('Enter a guess: ', (answer) => {
  let correct = checkGuess(Number(answer));
  if (correct) {
    console.log('You win!');
    rl.close();
  } else {
    askGuess();
  }
});
};
askGuess();

let secretNumber = 5;
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
