const fs = require('fs');
const path = require('path');

function readLines(challenge = 0, isSample = false) {
    var inputPath;
    const chalString = String(challenge).padStart(2, '0')
    if (isSample)
        inputPath = path.resolve('./data/' + chalString + 'testdata.txt')
    else {
        inputPath = path.resolve('./data/' + chalString + 'data.txt')
    }
    const data = fs.readFileSync(inputPath, 'utf-8')
    output = data.split('\n')
    return output
}

module.exports = { readLines }
