const { readLines } = require('./common.js')

const splitLine = (line) => line.split(',')
const splitRange = (arr) => [arr[0].split('-').map(Number), arr[1].split('-').map(Number)]
const completeOverlap = (a, b) => (a[0] >= b[0] && a[1] <= b[1]) || (b[0] >= a[0] && b[1] <= a[1])
const partialOverlap = (a, b) => (a[0] >= b[0] && a[0] <= b[1]) || (a[1] >= b[0] && a[1] <= b[1]) || completeOverlap(a, b)

const solve1 = (lines) => lines.map(splitLine).map(line => completeOverlap(...splitRange(line))).filter(Boolean).length

const solve2 = (lines) => lines.map(splitLine).map(line => partialOverlap(...splitRange(line))).filter(Boolean).length

console.log(solve1(readLines(4, false)))
console.log(solve2(readLines(4, false)))

module.exports = { partialOverlap, completeOverlap, solve1, solve2 };
