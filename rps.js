// This is a rock-paper-scissors game that was made as an exercise in concise functions and arrow form syntax.  It was made as part of an exercise on Codecademy.

// function getUserChoice()'s only purpose is to validate input.  we want it to be all lowercase for later purposes, and we want to make sure the input is valid.
// psuedocode:
// if the user input is "rock", "paper", "scissors", or "bomb", the input is valid, otherwise an error is generated.
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb")
  {
    return userInput;
  } else
  {
    console.log("Error.");
    userInput = "error";
    return userInput;
  }
}

// function getComputerChoice() exists to generate a random choice from the CPU.
const getComputerChoice = () => {
  switch (Math.floor(Math.random()*3)) //Math.random() generates a random number between 0 and 1.  We take the result and multiply that by 3, and then use Math.floor() to round the result down to the nearest integer.
  {
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

// function determineWinner() provides the meat of the game's logic.  It accepts two arguments, one that is the player's choice and one that is the CPU's choice, and compares the results to determine a winner.
const determineWinner = (userChoice, computerChoice) => 
{
  if (userChoice === computerChoice) 
  {
    return "tie";
  } else if (userChoice === "rock")
  {
    if (computerChoice === "paper")
    {
      return "pcwin";
    } else
    {
      return "userwin";
    }
  } else if (userChoice === "paper")
  {
    if (computerChoice === "scissors")
    {
      return "pcwin";
    } else
    {
      return "userwin";
    }
  } else if (userChoice === "scissors")
    {
      if (computerChoice === "rock")
      {
        return "pcwin";
      } else
      {
        return "userwin";
      }
    } 
    else if (userChoice === "bomb") // "bomb" is a cheatcode that beats all other options every time.
    {
      return "userwin";
    } else
    {
      return "error";
    }
}

const playGame = (userChoice, computerChoice = getComputerChoice()) =>
{
  userChoice = getUserChoice(userChoice);
  console.log(`User chose ${userChoice}.`);
  console.log(`Computer chose ${computerChoice}.`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame("scissors");