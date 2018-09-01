var inquirer = require("inquirer");

var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "greatbay_db",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    postOrBidFunc();

});



//================================================
// Post or Bid

function postOrBidFunc() {
    inquirer
        .prompt([
            // Here we create a basic text prompt.
            {
                type: "list",
                name: "postOrBid",
                message: "Would you like to post or bid on an item?",
                choices: ["Post an item", "Bid on an item"]

            }
        ])
        .then(function (answer) {
            // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
            if (answer.postOrBid === "Post an item") {
                console.log("posted");
                postItemFunc();
            }
            else {
                console.log("bid");
                bidFunc();
            }
        });
}

// =======================================================================
// Post Function
function postItemFunc() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the name of your item?"
            },
            {
                type: "input",
                name: "category",
                message: "What is the category of your item?"
            },
            {
                type: "input",
                name: "price",
                message: "What is the price of your item?",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            createItem(answer);

        });
}

// =====================================
// Bid Func
function bidFunc() {
    connection.query()
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What item would you like to bid on?"
            }
        ])
        .then(function (answer) {


        });
}


// ======================================
// Create Item Func
function createItem(itemData) {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO items SET ?",
        itemData,
        function (err, res) {
            console.log(res);
            // console.log(res.affectedRows + " product inserted!\n");
            // Call updateProduct AFTER the INSERT completes
            // updateItem();
        }
    );
    // logs the actual query being run
    console.log(query.sql);
}

// ============================================
// Update Item Func
function updateItem() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
        "UPDATE items SET ? WHERE ?",
        [
            {
                quantity: 100
            },
            {
                flavor: "Rocky Road"
            }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
            // Call deleteProduct AFTER the UPDATE completes
            deleteProduct();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}