
const Choices = {
    STONE: 'stone',
    PAPER: 'paper',
    SCISSORS: 'scissors'
  };
  
 
  function determineWinner(playerChoice, opponentChoice) {
  
    if (playerChoice === opponentChoice) {
      return 'tie';
    }
  
  
    const winningCombinations = {
      [Choices.STONE]: Choices.SCISSORS,
      [Choices.PAPER]: Choices.STONE,
      [Choices.SCISSORS]: Choices.PAPER
    };

    if (winningCombinations[playerChoice] === opponentChoice) {
      return 'player';
    }
  
  
    return 'opponent';
  }
  
  module.exports = {
    Choices,
    determineWinner
  };
  