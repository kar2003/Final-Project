// model/gameLogic.js

// Enum representing the possible choices in stone-paper-scissors
const Choices = {
    STONE: 'stone',
    PAPER: 'paper',
    SCISSORS: 'scissors'
  };
  
  // Function to determine the winner of a stone-paper-scissors game
  function determineWinner(playerChoice, opponentChoice) {
    // If choices are the same, it's a tie
    if (playerChoice === opponentChoice) {
      return 'tie';
    }
  
    // Define winning combinations
    const winningCombinations = {
      [Choices.STONE]: Choices.SCISSORS,
      [Choices.PAPER]: Choices.STONE,
      [Choices.SCISSORS]: Choices.PAPER
    };
  
    // If player's choice beats opponent's choice, player wins
    if (winningCombinations[playerChoice] === opponentChoice) {
      return 'player';
    }
  
    // Otherwise, opponent wins
    return 'opponent';
  }
  
  module.exports = {
    Choices,
    determineWinner
  };
  