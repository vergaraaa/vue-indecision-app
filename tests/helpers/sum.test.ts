import { describe, expect, test } from 'vitest';
import { addArray, sum } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    const a = 1;
    const b = 2;

    const result = sum(a, b);

    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('should return 0 if array is empty', () => {
    const array = [];

    const result = addArray(array);

    expect(result).toBe(0);
  });

  test('should return correct sum of a numbers array', () => {
    const array = [1, 2, 3];

    const result = addArray(array);

    expect(result).toBe(6);
  });
});
