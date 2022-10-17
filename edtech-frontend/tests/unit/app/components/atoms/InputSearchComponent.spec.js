import { mount } from '@vue/test-utils';
import '@test/base-test';
import InputSearchComponent from 'App/components/atoms/InputSearchComponent.vue';
import Vuetify from 'vuetify';

function factory(value = '') {
  const vuetify = new Vuetify();
  const div = document.createElement('div');
  document.body.appendChild(div);
  return mount(InputSearchComponent, {
    vuetify,
    attachTo: div,
    sync: false,
    propsData: {
      value,
      showSearchButton: true
    },
    data() {
      return {
        value: 'Texto padrão',
      };
    },
  });
}

describe('InputSearchComponent.vue', () => {
  it('set model and expected value', () => {
    const wrapper = factory({});
    expect(wrapper.vm.value).toBe('Texto padrão');
  });
  
  it('emitting event', () => {
    const wrapper = factory({});
    wrapper.find('#searchButton').trigger('click');
    expect(wrapper.emitted('search')).toBeTruthy();
  });

  it('emitting event on keyboard enter', async () => {
    const wrapper = factory({});
    await wrapper.find('input').trigger('keyup.enter');
    expect(wrapper.emitted('search')).toBeTruthy();
  });
});
