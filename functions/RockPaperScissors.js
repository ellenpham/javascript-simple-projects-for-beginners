const promptSync = require('prompt-sync');

const promptInstance = promptSync({
  sigint: true
});

class userInputError extends Error {
  constructor(message = "Invalid choice input! Please try again!") {
    super();
    this.statusCode = 404;
    this.message = message;
  }
}

console.log('\nHi, welcome to the Rock, Paper and Scissors game!\n');

function greeting (userName) {

  if (userName !== "") {
    console.log(`\nHi, ${userName}!\n`);
  } else {
    userName = 'stranger';
    console.log(`\nHi, ${userName}!\n`);
  }
}

userName = promptInstance("What is your name? ");
greeting(userName);


const getComputerChoice = () => {
  let number = Math.floor(Math.random()*3);
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1: 
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}



function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "The game was a tie!";
  };

  if (userChoice === 'bomb') {
    return "You always win!!!";
  };
  
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Oh well! The computer won!";
    } else {
      return "Woohooo!! You won!";
    };
  };

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
        return "Oh well! The computer won!";
      } else {
        return "Woohooo!! You won!";
      };
    };

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Oh well! The computer won!";
    } else {
      return "Woohooo!! You won!";
    };
  };

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Oh well! The computer won!";
    } else {
      return "Woohooo!! You won!";
    };
  };
};


const playGame = () => {

  let userInput = null;
  let userCorrectChoice = false;

  do {
      userInput = promptInstance("Please choose Rock, Paper or Scissors: ");
      console.log("\n");

      const getUserChoice = (userInput) => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
          userCorrectChoice = true;
          return userInput;
        } else if (userInput === 'bomb') {
          userCorrectChoice = true;
          return userInput;
        } else {
          throw new userInputError();
          //console.log("Invalid input! Try again!")
        };
      };

      let computerChoice = getComputerChoice();
      let userChoice = getUserChoice(userInput);

      console.log('You threw: ' + userChoice);
      console.log('The computer threw: ' + computerChoice);
    
      console.log(determineWinner(userChoice, computerChoice))

    } while (!userCorrectChoice);
};


try {
  playGame();
} catch (error) {
  if (error.statusCode) {
    console.log(`Error ${error.statusCode} occured, its message is: ${error.message}`);
  } else {
    console.log("Some error occurred" + error.message);
  };
} finally {
  console.log("\nThe game has ended! See you next time!");
};

  
module.exports = {
  playGame
}