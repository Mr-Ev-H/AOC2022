const day4 = require('./04');
const { readLines } = require('./common');

test('Detects overlap', () => {
    const input = []
    expect(day4.completeOverlap([1, 1], [1, 1])).toBe(true);
    expect(day4.completeOverlap([2, 2], [1, 1])).toBe(false);

    expect(day4.completeOverlap([1, 10], [2, 9])).toBe(true);
    expect(day4.completeOverlap([2, 9], [1, 10])).toBe(true);

    expect(day4.completeOverlap([1, 10], [10, 10])).toBe(true);

    expect(day4.completeOverlap([2, 2], [10, 95])).toBe(false);
});

test('Detects partial overlap', () => {
    const input = []
    expect(day4.partialOverlap([1, 1], [1, 1])).toBe(true);
    expect(day4.partialOverlap([2, 2], [1, 1])).toBe(false);

    expect(day4.partialOverlap([1, 10], [2, 9])).toBe(true);
    expect(day4.partialOverlap([2, 9], [1, 10])).toBe(true);

    expect(day4.partialOverlap([1, 10], [10, 10])).toBe(true);
    expect(day4.partialOverlap([1, 10], [5, 5])).toBe(true);

    expect(day4.partialOverlap([1, 10], [11, 12])).toBe(false);

    expect(day4.partialOverlap([2, 2], [2, 3])).toBe(true);

    expect(day4.partialOverlap([1, 1], [2, 3])).toBe(false);
    expect(day4.partialOverlap([1, 2], [2, 3])).toBe(true);
    expect(day4.partialOverlap([2, 2], [2, 3])).toBe(true);
    expect(day4.partialOverlap([3, 3], [2, 3])).toBe(true);
    expect(day4.partialOverlap([3, 4], [2, 3])).toBe(true);
    expect(day4.partialOverlap([4, 4], [2, 3])).toBe(false);

    expect(day4.partialOverlap([2, 3], [1, 1])).toBe(false);
    expect(day4.partialOverlap([2, 3], [1, 2])).toBe(true);
    expect(day4.partialOverlap([2, 3], [2, 2])).toBe(true);
    expect(day4.partialOverlap([2, 3], [3, 3])).toBe(true);
    expect(day4.partialOverlap([2, 3], [3, 4])).toBe(true);
    expect(day4.partialOverlap([4, 4], [2, 3])).toBe(false);
});

const exampleData = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

test('Solves example part 1', () => {
    expect(day4.solve1(exampleData.split('\n'))).toBe(2);
});

test('Solves example part 2', () => {
    expect(day4.solve2(exampleData.split('\n'))).toBe(4);
});