import mixinRules from 'App/mixins/mixinRules';
import { shallowMount } from '@vue/test-utils';

const Component = {
  render() {},
  mixins: [mixinRules],
};

describe('mixinRules.js', () => {

  it('verify requiredRule computed', () => {
    const wrapper = shallowMount(Component);
    const funcRequiredRule = wrapper.vm.rules.required;
    expect(funcRequiredRule(null)).toEqual('Obrigatório.');
    expect(funcRequiredRule('')).toEqual('Obrigatório.');
    expect(funcRequiredRule('teste')).toEqual(true);
    wrapper.destroy();
  });

  it('verify document rule computed', () => {
    const wrapper = shallowMount(Component);
    const funcDocumentRule = wrapper.vm.rules.document;
    expect(funcDocumentRule(null)).toEqual(true);
    expect(funcDocumentRule('')).toEqual(true);
    expect(funcDocumentRule('teste')).toEqual('Documento inválido.');
    expect(funcDocumentRule('01234569878')).toEqual(true);
    expect(funcDocumentRule('012.345.698-78')).toEqual(true);
    wrapper.destroy();
  });

  it('verify email rule computed', () => {
    const wrapper = shallowMount(Component);
    const funcEmailRule = wrapper.vm.rules.email;
    expect(funcEmailRule(null)).toEqual('E-mail inválido.');
    expect(funcEmailRule('')).toEqual('E-mail inválido.');
    expect(funcEmailRule('teste@teste.com')).toEqual(true);
    expect(funcEmailRule('teste#teste.com')).toEqual('E-mail inválido.');
    expect(funcEmailRule('123te.com')).toEqual('E-mail inválido.');
    wrapper.destroy();
  });
});
