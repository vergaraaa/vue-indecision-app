import { mount } from '@vue/test-utils';
import { describe, test } from 'vitest';

import CounterComponent from '@/components/CounterComponent.vue';

describe('<CounterComponent />', () => {
  test('should match snapshot', () => {
    const wrapper = mount(CounterComponent, {
      props: {
        value: 13,
      },
    });
  });
});
