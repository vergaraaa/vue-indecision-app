import { mount } from '@vue/test-utils';

import CounterComponent from '@/components/CounterComponent.vue';
import { describe, test, expect, it } from 'vitest';

describe('<CounterComponent />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(CounterComponent, {
      props: {
        value: 13,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(CounterComponent, {
      props: {
        value: value,
      },
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );
  });

  test('increment counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(CounterComponent, {
      props: {
        value: value,
      },
    });

    const [, btnIncrement] = wrapper.findAll('button');
    await btnIncrement.trigger('click');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value + 1}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${(value + 1) * (value + 1)}`,
    );
  });

  test('decrements counter when -1 button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(CounterComponent, {
      props: {
        value: value,
      },
    });

    const btnDecrement = wrapper.find('button');
    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value - 2}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${(value - 2) * (value - 2)}`,
    );
  });
});
