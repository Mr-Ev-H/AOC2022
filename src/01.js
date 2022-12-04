const fs = require('fs');
const path = require('path')

function maxCalories(elves) {
    const totals = elves.map(val => val.reduce((sum, calories) => sum + calories)).map(Number)
    return Math.max(...totals)
}

function topThree(elves) {
    const x = elves.map(val => val.reduce((sum, calories) => sum + calories, 0)).map(Number)

    x.sort(function (a, b) { return a - b }).reverse();

    return x[0] + x[1] + x[2]
}

function loadInput(isSample) {
    var inputPath;
    if (isSample)
        inputPath = path.resolve('./data/01testdata.txt')
    else {
        inputPath = path.resolve('./data/01data.txt')
    }
    const data = fs.readFileSync(inputPath, 'utf-8')
    const splits = data.split('\n\n')
    output = splits.map((v) => v.split('\n').map(Number))
    return output
}

function solve1(sample) {
    return maxCalories(loadInput(sample))
}

function solve2(sample) {
    return topThree(loadInput(sample))
}

sample = false
console.log(solve1(sample))
console.log(solve2(sample))

module.exports = { maxCalories, solve1, solve2 };