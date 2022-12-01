const day1 = require('./01');

test('Sums calories correctly', () => {
    const elves = [[1000, 2000, 3000], [4000]]
    expect(day1.maxCalories(elves)).toBe(6000);
});

test('Produces correct result for part 1 from sample data file', () => {
    expect(day1.solve1(true)).toBe(24000);
});

test('Produces correct result for part 2 from sample data file', () => {
    expect(day1.solve2(true)).toBe(45000);
});