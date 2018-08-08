// Variables 
var wins = 0;
var losses = 0;
var downs = ["1st", "2nd", "3rd", "4th"];
var teams = ["Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Lions", "Packers", "Texans", "Colts", "Jaguars", "Chiefs", "Dolphins", "Vikings", "Patriots", "Saints", "Giants", "Jets", "Raiders", "Eagles", "Steelers", "Chargers", "49ers", "Seahawks", "Rams", "Buccaneers", "Titans", "Redskins"];

console.log(teams);

// Key up function
$(document).ready(function () {
    $(document).keyup(function () {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var userGuess = event.key.toUpperCase();
            console.log("User guess " + userGuess);
        } else if (event.keyCode >= 48 && event.keyCode <= 57) {
            userGuess = event.key;
            console.log("User guess " + userGuess);
        }

    });
});

// Randomly pick team
function pickTeam() {
    Math.floor(Math.random() * 32);
}