const fs = require('fs');
const path = require('path')

const winMov = { 'r': 'p', 'p': 's', 's': 'r' }
const losMov = { 'p': 'r', 's': 'p', 'r': 's' }
const oMap = { 'A': 'r', 'B': 'p', 'C': 's' }
const pMap = { 'X': 'r', 'Y': 'p', 'Z': 's' }
const shapeScores = { 'r': 1, 'p': 2, 's': 3 }

function solve1(moves) {
    let score = 0

    moves.forEach(element => {
        const m = element.split(' ')

        const oppMov = oMap[m[0]]
        const plaMov = pMap[m[1]]

        if (winMov[oppMov] == plaMov) //won
        {
            score += 6
        }
        else if (winMov[plaMov] == oppMov) //lost
        {
            score += 0
        }
        else {  //draw
            score += 3
        }

        score += shapeScores[plaMov]
    });
    return score
}

function solve2(moves) {
    let score = 0

    moves.forEach(element => {
        const m = element.split(' ')

        const omov = oMap[m[0]]

        let plaMov = ''

        if (m[1] == 'Z') //win
        {
            score += 6
            plaMov = winMov[omov]
        }
        else if (m[1] == 'X') //lose
        {
            score += 0
            plaMov = losMov[omov]
        }
        else if (m[1] == 'Y') //draw
        {
            score += 3
            plaMov = omov
        }

        score += shapeScores[plaMov]
    });
    return score
}


function loadInput(isSample) {
    var inputPath;
    if (isSample)
        inputPath = path.resolve('./data/02testdata.txt')
    else {
        inputPath = path.resolve('./data/02data.txt')
    }
    const data = fs.readFileSync(inputPath, 'utf-8')
    output = data.split('\n')
    return output
}

module.exports = { solve1, solve2, loadInput };

console.log(solve1(loadInput(false)))
console.log(solve2(loadInput(false)))