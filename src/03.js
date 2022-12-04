const fs = require('fs');
const path = require('path')

function findError(input) {
    half = input.slice(input.length / 2)

    for (let i = 0; i < input.length / 2; i++) {
        if (half.indexOf(input[i]) != -1) {
            return input[i]
        }
    }
}

function findCommon(lines) {
    let items = new Set(lines[0])

    for (const c of items) {
        if (lines[1].indexOf(c) == -1) {
            items.delete(c)
        }
        if (lines[2].indexOf(c) == -1) {
            items.delete(c)
        }
    }

    return items.values().next().value
}

function scoreItem(char) {
    const code = char.charCodeAt(0)

    if (code > 90) return code - 96
    else return code + 27 - 65
}


function loadInput(isSample) {
    var inputPath;
    if (isSample)
        inputPath = path.resolve('./data/03testdata.txt')
    else {
        inputPath = path.resolve('./data/03data.txt')
    }
    const data = fs.readFileSync(inputPath, 'utf-8')
    output = data.split('\n')
    return output
}

function solve1(input) {
    let score = 0
    for (const line of input) {
        score += scoreItem(findError(line))
    }
    return score
}

function solve2(input) {
    score = 0
    for (let i = 0; i < input.length; i += 3) {
        common = findCommon([input[i], input[i + 1], input[i + 2]])
        score += scoreItem(common)
    }
    return score
}

module.exports = { findError, scoreItem, loadInput, solve1, findCommon };

scoreItem('a')

console.log(solve1(loadInput(false)))
console.log(solve2(loadInput(false)))