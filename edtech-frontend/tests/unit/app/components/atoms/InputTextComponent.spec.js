import { shallowMount } from '@vue/test-utils';
import '@test/base-test';
import InputTextComponent from 'App/components/atoms/InputTextComponent.vue';

function factory({ model = '', label = '' }) {
  return shallowMount(InputTextComponent, {
    propsData: {
      value: model,
      label,
    },
  });
}

describe('InputTextComponent.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory({ model: 'Texto padrão', label: 'Teste' });
    expect(wrapper.vm.value).toBe('Texto padrão');
  });

});
