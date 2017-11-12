const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput
    } else {
      console.log('Unknown parameter');
    }
  }
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*2);
    if (randomNumber === 0) {
      return 'rock';
    } else if (randomNumber === 1 ) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return console.log('It is a tie.')
    } else if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        return console.log('You won!');
      } else {
        return console.log('Computer won!');
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return console.log('Computer won!');
      } else {
        return console.log('You won!');
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return console.log('Computer won!');
      } else {
        return console.log('You won!');
      }
    } else if (userChoice === 'bomb') {
      return console.log('You won!');
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice('dick');
    const computerChoice = getComputerChoice();
    console.log('Your choice: ' + userChoice);
    console.log('Computer choice: ' + computerChoice);
    determineWinner(userChoice, computerChoice);
    }
  
  playGame();
  