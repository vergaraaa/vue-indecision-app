import { useCounter } from '@/composables/useCounter';
import { describe, expect, test } from 'vitest';

describe('useCounter', () => {
  test('initializes counter with provided default value', () => {
    const { counter, squareCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(25);
  });

  test('initializes counter with provided initial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  test('increments counter correctly', () => {
    const { counter, squareCounter } = useCounter();

    counter.value++;

    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(36);
  });

  test('decrements counter correctly', () => {
    const { counter, squareCounter } = useCounter();

    counter.value--;

    expect(counter.value).toBe(4);
    expect(squareCounter.value).toBe(16);
  });
});
