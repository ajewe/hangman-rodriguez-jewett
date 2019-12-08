//need a word (is answer) 'arrayAnswer', stays hidden
let arrayAnswer = ['h', 'e', 'l', 'l', 'o']

//need array with dashes
// let arrayGrid = ['-', '-', '-', '-', '-']

//user inputs 1 letter, check that agains 'arrayAnswer' 
function checkInput() {

  let input = document.getElementById('input').value

  for (let i = 0; i < arrayAnswer.length; i++) {
    if (input === arrayAnswer[i]) {
      // add that letter to the grid array at that corresponding spot
      document.getElementById('array').children[i].innerHTML = arrayAnswer[i]
      document.getElementById('input').value = ''
    }
  }
  wrongGuess();
};

//make a wrong function and run it in the else of checkInput where it will 
//add the guess to a guess bank
let currentImg = 5;

function wrongGuess() {
  // add input to guess bank
  input = document.getElementById('input').value
  if (document.getElementById('input').value !== '') {

    let newH4 = document.createElement('h4');
    let textH4 = document.createTextNode(input)
    newH4.appendChild(textH4)
    document.getElementById('wrongGuess').appendChild(newH4)
    document.getElementById('input').value = ''

    //picture progression

    document.getElementById('img').src=`./images/${currentImg}.jpg`
    currentImg++
    if (currentImg > 11) {
      alert("Nooooooooooo, You already lost! Refresh the page to try again")
    }
  }
}

// document.getElementById('array').children.indexOf(input) === -1