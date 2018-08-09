// Variables 
var wins = 0;
var losses = 0;
var guessesLeft = 4;
var alreadyGuessed = [];
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
    if (fired === true) {
        console.log(blank);
        console.log(team);
        rightWord(blank);
    }
    if (fired === false) { //guess was not correct
        // is this our first wrong guess? If so, reduce guesses left and add letter to already guessed array

        if (clicks === 1) {
            guessesLeft--;
            $("#guessesLeftSpan").text(guessesLeft);
            alreadyGuessed.push(userGuessInput);
            guessesLeftFunc(guessesLeft);

        } else { //this was not our first guess
            // have we guessed this letter before?
            fired2 = false;
            for (i = 0; i < alreadyGuessed.length; i++) {
                if (userGuessInput === alreadyGuessed[i]) { //has this guess already been gueessed before?
                    fired2 = true;
                }
            };
            if (fired2 === false) { // Guess was not already guessed. Add letter to already guessed array and reduce guesses left
                guessesLeft--;
                $("#guessesLeftSpan").text(guessesLeft);
                alreadyGuessed.push(userGuessInput);
                guessesLeftFunc(guessesLeft);
            }
        }
    }
}

// Guesses left function
function guessesLeftFunc(x) {
    if (x === 0) {
        losses++;
        $("#lossesSpan").text(losses);
        guessesLeft = 4;
        $("#guessesLeftSpan").text(guessesLeft);
        alreadyGuessed = [];
        team = pickTeam();
        blank = blankSpaces(team);
        $("#hangmanDiv").text(blank);
    }
}

// Right word function
function rightWord(input) {
    if (input === team) {
        wins++;
        $("#winsSpan").text(wins);
        guessesLeft = 4;
        $("#guessesLeftSpan").text(guessesLeft);
        alreadyGuessed = [];
        team = pickTeam();
        blank = blankSpaces(team);
        $("#hangmanDiv").text(blank);
    }
}


