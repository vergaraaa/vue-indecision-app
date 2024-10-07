import { useChat } from '@/composables/useChat';
import { json } from 'stream/consumers';
import { describe, expect, test, vi } from 'vitest';

describe('useChat', () => {
  test('should add message correclty when onMessage is called', async () => {
    const text = 'hello world';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(1);
    // expect(messages.value[0].isMine).toBe(true);
    // expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      message: text,
      isMine: true,
    });
  });

  test('should add nothing is text is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    expect(messages.value.length).toBe(0);
  });

  test('should get response correctly when message ends with "?"', async () => {
    const text = 'want some coffee?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 2000));

    const [myMessage, responseMessage] = messages.value;

    expect(messages.value.length).toBe(2);
    expect(myMessage).toEqual({
      id: expect.any(Number),
      isMine: true,
      message: text,
    });
    expect(responseMessage).toEqual({
      id: expect.any(Number),
      image: expect.any(String),
      isMine: false,
      message: expect.any(String),
    });
  });

  test('mock response - fetch api', async () => {
    const mockResponse = {
      answer: 'yes',
      image: 'example.gif',
    };

    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));

    const text = 'want some coffee?';
    const { messages, onMessage } = useChat();

    await onMessage(text);

    await new Promise((r) => setTimeout(r, 1600));

    const [, responseMessage] = messages.value;

    expect(responseMessage).toEqual({
      id: expect.any(Number),
      image: mockResponse.image,
      isMine: false,
      message: mockResponse.answer,
    });
  });
});
