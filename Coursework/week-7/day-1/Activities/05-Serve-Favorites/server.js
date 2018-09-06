// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {

    // Capture the url the request is made to
    var path = req.url;

    // Depending on the URL, display a different HTML file.



    // Here we use the fs package to read our index.html file


    switch (path) {

        case "/":
            return displayRoot(path, req, res);

        case "/foods":
            return displayFoods(path, req, res);

        case "/movies":
            return displayMovies(path, req, res);

        case "/frameworks":
            return displayFrameworks(path, req, res);

        default:
            return display404(path, req, res);
    }

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    // res.writeHead(200, { "Content-Type": "text/html" });
    // res.end(data);

}

// Starts our server
server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});

function displayRoot(url, req, res) {
    fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFoods(url, req, res) {
    fs.readFile(__dirname + "/foods.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayMovies(url, req, res) {
    fs.readFile(__dirname + "/movies.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFrameworks(url, req, res) {
    fs.readFile(__dirname + "/frameworks.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(url, req, res) {
    fs.readFile(__dirname + "/404.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}