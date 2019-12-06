// create hangman word
let arrayAnswer = ['h', 'e', 'l', 'l', 'o']
// create array of dashes
let arrayGrid = ['-', '-', '-', '-', '-']
// user inputs one letter 
// add letter to grid array in coorisponding spot
function checkInput(input) {
  for (let i = 0; i < arrayAnswer.length; i++) {
    if (input === arrayAnswer[i]){
    // check against correct word
    arrayGrid[i] = arrayAnswer[i]
    // if array has letter, push to correct dash
    } else wrongGuess[input];
  }
}
function wrongGuess(input) {
  // add function for incorrect input
  // if user is incorrect, add body parts 

}
// have box for previous guesses