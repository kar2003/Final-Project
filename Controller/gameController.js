// controller/userController.js

// Import necessary modules and dependencies
const UserModel = require('../model/userModel');
const bcrypt = require('bcryptjs');
  
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://rock-paper-scissors14.p.rapidapi.com/',
  params: {choice: 'rock'},
  headers: {
    'X-RapidAPI-Key': '5aced98477mshcf79b806a611ec9p1e5397jsn0bb4e4ee44ba',
    'X-RapidAPI-Host': 'rock-paper-scissors14.p.rapidapi.com'
  }
};


async function RockPaperScissorsAPI() {

try {
	const response = await axios.request(options);
	console.log(response.data.ai.name);
// console.log(response.data.ai[name]);
} catch (error) {
	console.error(error);
}

}
// async function makeMove(humanChoice) {
//   // // Extract the player's choice from the request body
//   // const choice = req.body.choice;

//   // // Call your RockPaperScissorsAPI or implement your game logic here
//   // // For now, let's just return the choice received from the client
//   // return res.status(200).send(`You chose: ${choice}`);
// }

module.exports = {
  makeMove: makeMove
};