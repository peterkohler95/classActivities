var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "playlist_db",
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'

});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM fav_songs", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}