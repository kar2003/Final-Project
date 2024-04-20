
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


module.exports = {
  makeMove: makeMove
};