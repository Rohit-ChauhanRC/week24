import fs from 'fs';

fs.readFile('async.txt', function (err, data) { 
    if (err) {
        console.error(err);
    } else {
        console.log(data.toString());
    }
});