// Hide Questions

$("#gameHide").hide();

// start click function

$(document).ready(function () {
    $("#startId").on("click", function () {
        setTimeout(function () {

        }, 30000);
        $("#startId").hide();
        $("#gameHide").show();

    })
})

// Submit click function
$(document).ready(function () {
    $("#submitBtn").on("click", function () {
        if ($('input[name="radios"]:checked').val() == "Bernie Kosar") {
            console.log("correct answer");
        } else {
            console.log("inncorrect answer");
        }

    })
})

// Questions Array
questions = [
    {
        prompt: "How many National Championships does Miami have?",
        option1: 2,
        option2: 5,
        option3: 6,
        option4: 10,
        correctA: 5
    },
    {
        prompt: "Who was the Hurricanes quaterback in 1983?",
        option1: "Bernie Kosar",
        option2: "Ken Dorsey",
        option3: "Mark Richt",
        option4: "Malik Rosier",
        correctA: "Bernie Kosar"
    }

]

// Variables


// creates question divs
function createDivQs() {
    for (i = 0; i < questions.length; i++) {

        element = $("<input>");

        a = $("#gameId").append(questions[i].prompt + "<br>");
        b = $("#gameId").append(questions[i].option1);
        c = $("#gameId").append(questions[i].option2);
        d = $("#gameId").append(questions[i].option3);
        e = $("#gameId").append(questions[i].option4 + "<br>");
        f = $("#gameId").append(questions[i].correctA + "<br>");

        console.log(a);

    }

}

// createDivQs();

// Calculate right and wrong answers

function quizGrader() {

}

// <input type="submit" value="Submit">
