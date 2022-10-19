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
  it('set model on create and receive expected value', () => {
    const wrapper = factory({ model: 'Texto padrão', label: 'Teste' });
    expect(wrapper.vm.value).toBe('Texto padrão');
  });

  it('set model and expected value emmited', () => {
    const wrapper = factory({ label: 'Teste' });
    wrapper.vm.valorModel = 'Texto livre'
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0][0]).toEqual('Texto livre');
  });

  it('validate input', () => {
    const wrapper = factory({ label: 'Teste' });
    wrapper.vm.$refs.form.validate = jest.fn()
    wrapper.vm.validate();
    expect(wrapper.vm.$refs.form.validate).toBeCalled();
  });

});
