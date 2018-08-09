// Variables 
var wins = 0;
var losses = 0;
var guessesLeft = 4;
alreadyGuessed = [];
var teams = ["Cardinals", "Falcons", "Ravens", "Bills", "Panthers", "Bears", "Bengals", "Browns", "Cowboys", "Bronocs", "Lions", "Packers", "Texans", "Colts", "Jaguars", "Chiefs", "Dolphins", "Vikings", "Patriots", "Saints", "Giants", "Jets", "Raiders", "Eagles", "Steelers", "Chargers", "49ers", "Seahawks", "Rams", "Buccaneers", "Titans", "Redskins"];
clicks = 0;


// Randomly pick team and split
function pickTeam() {
    teamIndex = Math.floor(Math.random() * 32);
    return teams[teamIndex].toUpperCase().split("");
}

// function to display blank spaces
function blankSpaces(teamString) {
    return teamString.map(function (char) { return "_" });
};

// pick team and run blankSpaces function and assign to blank
team = pickTeam();
blank = blankSpaces(team);


console.log(blank);


// Varirables to html
$("#winsSpan").text(wins);
$("#lossesSpan").text(losses);
$("#guessesLeftSpan").text(guessesLeft);
$("#hangmanDiv").text(blank);

console.log(team);

// Key up function
$(document).ready(function () {
    $(document).keyup(function () {
        clicks++;
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            var userGuess = event.key.toUpperCase();
            hangman(userGuess);
            console.log(blank);
        } else if (event.keyCode >= 48 && event.keyCode <= 57) {
            userGuess = event.key;
        }


    });
});

// Hangman logic function
function hangman(userGuessInput) {
    fired = false;
    for (i = 0; i < team.length; i++) {
        if (userGuessInput === team[i]) {
            blank[i] = userGuessInput;
            $("#hangmanDiv").text(blank);
            fired = true;
        }
    }
    if (fired === false) { //guess was not correct
        // is this our first wrong guess?

        if (clicks === 1) {
            guessesLeft--;
            $("#guessesLeftSpan").text(guessesLeft);
            alreadyGuessed.push(userGuessInput);
            console.log(alreadyGuessed);

        } else { //this was not our first guess
            // have we guessed this letter before?
            fired2 = false;
            for (i = 0; i < alreadyGuessed.length; i++) {
                if (userGuessInput === alreadyGuessed[i]) {
                    fired2 = true;
                    console.log("test2 " + alreadyGuessed);
                }
            };
            if (fired2 === false) {
                guessesLeft--;
                $("#guessesLeftSpan").text(guessesLeft);
                alreadyGuessed.push(userGuessInput);
                console.log("test " + alreadyGuessed);

            }
        }



    }
}


