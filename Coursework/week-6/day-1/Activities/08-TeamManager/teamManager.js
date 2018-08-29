var inquirer = require('inquirer');

var teamList = [];
var starters = [];

createNewPlayerBool = true;

var createNewPlayer = function () {

    if (createNewPlayerBool === true) {

        inquirer
            .prompt([
                /* Pass your questions in here */
                {
                    type: "input",
                    name: "playerName",
                    message: "What is your player's name?"
                },
                {
                    type: "list",
                    name: "playerPosition",
                    message: "What is your player's position?",
                    choices: ["Defense", "Mid-fielder", "Attack"]
                },
                {
                    type: "list",
                    name: "offenseStats",
                    message: "What is your player's offensive ability?",
                    choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
                },
                {
                    type: "list",
                    name: "defenseStats",
                    message: "What is your player's defensive ability?",
                    choices: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
                },
                {
                    type: "confirm",
                    name: "createNewPlayerBool",
                    message: "Do you want to create another player?"
                }

            ])
            .then(answers => {
                // Use user feedback for... whatever!!
                var newPlayer = new Player(
                    answers.playerName,
                    answers.playerPosition,
                    answers.offenseStats,
                    answers.defenseStats);

                if (starters.length < 3) {
                    teamList.push(newPlayer);
                    starters.push(newPlayer);
                } else {
                    for (var i = 0; i < teamList.length; i++) {
                        team[i].printStats();
                    }
                }


                if (answers.createNewPlayerBool === false) {
                    createNewPlayerBool = false;
                }

                createNewPlayer();

            });
    } else {
        console.log(teamList);
        playGame();
    }

}

function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.goodGame = function () {
        var coinFlip = Math.random();
        if (coinFlip > 0.5) {
            console.log("You had a good game")
            this.offense++;
            this.defense++;
        } else {
            console.log("You had a bad game")
            this.offense--;
            this.defense--;
        }
    }
    this.printStats = function () {
        console.log(this);
    }
}


createNewPlayer();


var count = 0;
var teamScore = 0;
function playGame() {

    if (count < 5) {
        var oppOff = Math.floor(Math.random(21));
        var oppDef = Math.floor(Math.random(21));
        var teamOff = teamList[0].offense + teamList[1].offense;
        var teamDef = teamList[0].defense + teamList[1].defense
        if (teamOff > oppOff) {
            teamScore++;
        } else {
            teamScore--;
        }
        if (teamDef > oppDef) {
            teamScore++;
        } else {
            teamScore--;
        }
        console.log(teamScore);
        count++;
        console.log(count);
    }
}


