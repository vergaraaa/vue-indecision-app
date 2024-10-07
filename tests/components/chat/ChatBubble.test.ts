import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<ChatBubble />', () => {
  test('renders own message correclty', () => {
    const message = 'Hello world';
    const wrapper = mount(ChatBubble, {
      props: {
        message: message,
        isMine: true,
      },
    });

    expect(wrapper.find('.bg-blue-200')).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);

    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  test('renders received message correclty', () => {
    const message = 'Yes';
    const image = 'http://example.jpg';
    const wrapper = mount(ChatBubble, {
      props: {
        message: message,
        isMine: false,
        image,
      },
    });

    expect(wrapper.find('.bg-gray-300').exists()).toBe(true);
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);

    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);

    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
