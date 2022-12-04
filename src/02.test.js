const day2 = require('./02');
const { readLines } = require('./common');

test('Sums rules correctly', () => {
    const rules = ['A Y', 'B X', 'C Z']
    expect(day2.solve1(rules)).toBe(15);
});

test('Sums winning rules correctly', () => {
    const rules = ['A Y', 'B Z', 'C X']
    expect(day2.solve1(rules)).toBe(24);
});

test('Sums losing rules correctly', () => {
    const rules = ['A Z', 'B X', 'C Y']
    expect(day2.solve1(rules)).toBe(6);
});

test('Sums part 2 rules correctly', () => {
    const rules = ['A Y', 'B X', 'C Z']
    expect(day2.solve2(rules)).toBe(12);
});

test('Produces correct answer for part 1', () => {
    expect(day2.solve1(readLines(2, false))).toBe(9651);
});

test('Produces correct answer for part 2', () => {
    expect(day2.solve2(readLines(2, false))).toBe(10560);
});