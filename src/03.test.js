const day3 = require('./03');

test('Finds correct error', () => {
    const input = 'vJrwpWtwJgWrhcsFMMfFFhFp'
    expect(day3.findError(input)).toBe('p');
});

test('Finds correct error', () => {
    const input = 'xx'
    expect(day3.findError(input)).toBe('x');
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
    expect(day3.solve1(day3.loadInput(true))).toBe(157);
});

test('Finds common chars', () => {
    expect(day3.findCommon(['ab', 'abca', 'zac'])).toBe('a');
});



