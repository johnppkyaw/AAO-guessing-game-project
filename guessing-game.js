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
