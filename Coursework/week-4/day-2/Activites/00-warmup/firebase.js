var database = firebase.database();

console.log(database);

// Need this code 
database.ref().on("value", function (snapshot) {
    console.log(snapshot.val());
    var data = snapshot.val().bio;
    console.log(data);
    $("#name").text("Name: " + data.name);
    $("#age").text("Age: " + data.age);
})


database.ref("songs/").set({
    favsong: "Everlong"
});



// create a folder called bio
// SET the following data:
// name, age



// =======================================

$(document).ready(function () {
    $("#saveBtn").on("click", function () {
        // get the value of the inputs
        userName = $("#nameId").val().trim();
        userAge = $("#ageId").val().trim();
        database.ref("bio").set({
            name: userName,
            age: userAge
        })
    })
});


