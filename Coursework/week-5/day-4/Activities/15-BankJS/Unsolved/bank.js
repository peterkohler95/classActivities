var fs = require('fs');

fs.readFile('bank.txt', 'utf8', function (error, data) {
    if (error) {
        return console.log(error);
    } else {
        total(data);

    }



})

// total function
function total(statement) {
    var data = statement.split(',')
    var cleanData = [];
    // for loop 
    for (var i = 0; i < data.length; i++) {
        cleanData[i] = parseFloat(data[i]);
    }
    function getSum(total, num) {
        return total + num;
    }
    total1 = cleanData.reduce(getSum).toFixed(2);
    console.log(total1);

}