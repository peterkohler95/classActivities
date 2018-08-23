var fs = require('fs');

fs.readFile('Unsolved/best_things_ever.txt', 'utf8', function (err, data) {
    if (err) {
        return console.log('err: ' + err);
    } else {

        var splitList = data.split(',');
        console.log(splitList);

    }

});

