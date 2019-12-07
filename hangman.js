//need a word (is answer) 'arrayAnswer', stays hidden
let arrayAnswer = ['h', 'e', 'l', 'l', 'o']

//need array with dashes
let arrayGrid = ['-', '-', '-', '-', '-']

//user inputs 1 letter, check that agains 'arrayAnswer' 
function checkInput(input) {
  for (let i = 0; i < arrayAnswer.length; i++) {
    if (input === arrayAnswer[i]){
      // add that letter to the grid array at that corresponding spot
      arrayGrid[i] = arrayAnswer[i]
      
    } else wrongGuess(input);
  }
};

//make a wrong function and run it in the else of checkInput where it will 
//add the guess to a guess bank

function wrongGuess(input) {

  // add input to guess bank
}
