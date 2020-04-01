// console.log('linked')

// let startGame = () => {
//     alert('Are you ready?', 'Yes/No');

const players = [
    "playerOne", 
    "playerTwo", 
    "playerThree", 
    "playerFour", 
    "playerFive"
];

let eliminate = players[Math.floor(Math.random() * players.length)];
//randomly choosing a player who is going to be eliminated in each round

// }
console.log(eliminate);