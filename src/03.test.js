const day3 = require('./03');
const { readLines } = require('./common');

test('Finds correct error', () => {
    const input = 'vJrwpWtwJgWrhcsFMMfFFhFp'
    expect(day3.findError(input)).toBe('p');
});

test('Converts char to correct value', () => {
    let input = 'a'
    expect(day3.scoreItem(input)).toBe(1);
    input = 'z'
    expect(day3.scoreItem(input)).toBe(26);
    input = 'A'
    expect(day3.scoreItem(input)).toBe(27);
    input = 'Z'
    expect(day3.scoreItem(input)).toBe(52);
});

test('Solves part 1 with test data', () => {
    expect(day3.solve1(readLines(3, true))).toBe(157);
});

test('Solves part 2 with test data', () => {
    expect(day3.solve2(readLines(3, true))).toBe(70);
});


test('Finds common chars', () => {
    expect(day3.findCommon(['ab', 'abca', 'zac'])).toBe('a');
});



