function Game() {
this.roundNumber = 0; 
this.isPlayerTurn = false;
this.enemies = [];
this.currentEnemy; 
this.player; 
}

const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

Game.prototype.intializeGame = function() {

this.enemies.push(new Enemy('Goblin', 'Sword'));
this.enemies.push(new Enemy('orc', 'baseball bat'));
this.enemies.push(new Enemy('skeleton', 'axe'));

this.currentEnemy = this.enemies[0];

};



module.exports = Game; 

inquirer
  .prompt({
    type: 'text',
    name: 'name',
    message: 'What is your name?'
  })
  // destructure name from the prompt object
  .then(({ name }) => {
    this.player = new Player(name);

    // test the object creation
    console.log(this.startNewBattle());
  });