import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  test('should render input and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();

    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  test('should emit sendMessage event when button is clicked with message value', async () => {
    const message = 'Hello world';

    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  test('should emit sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hello world';

    const input = wrapper.find('input[type="text"]');
    await input.setValue(message);
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
  });

  test('should not emit sendMessage event when keypress.enter is triggered with message value', async () => {
    const wrapper = mount(MessageBox);

    const input = wrapper.find('input[type="text"]');
    await input.trigger('keypress.enter');

    expect(wrapper.emitted('sendMessage')).toBeFalsy();
  });
});
