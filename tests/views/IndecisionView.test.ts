import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

import IndecisionView from '@/views/IndecisionView.vue';
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages</div>',
};

describe('<IndecisionView />', () => {
  test('should render chat messages and messagebox correctly', () => {
    const wrapper = mount(IndecisionView);

    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  test('should call onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: mockChatMessages,
        },
      },
    });

    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('sendMessage', 'Hello world');

    await new Promise((r) => setTimeout(r, 150));

    expect(wrapper.html()).toMatchSnapshot();
  });
});
