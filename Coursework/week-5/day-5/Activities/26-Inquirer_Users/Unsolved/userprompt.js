// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            message: "what is your fav country?",
            name: "favCountry"
        },
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        {
            type: "list",
            message: "Which continent do you choose?",
            choices: ["North America", "South America", "Europe", "Africa", "Australia"],
            name: "list"
        },
        {
            type: "checkbox",
            message: "check which countries you've been to",
            choices: ["France", "Brazil", "Kenya"],
            name: "checkbox"
        }

    ])
    .then(answers => {
        // Use user feedback for... whatever!!
        console.log(answers)
    });