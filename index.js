const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
    input: fs.createReadStream('./shakespeare.json'),
    // output: process.stdout,
    console: false
});

let idx = 0;

readInterface.on('line', function (line) {

    let obj = JSON.parse(line)

    if (obj.index) {
        delete obj.index._type
    }

    var str = JSON.stringify(obj)

    fs.appendFileSync('new.json', (str + '\n'), function (e) {
        console.log(e)
    })

    idx++;

    console.log(idx);

});

