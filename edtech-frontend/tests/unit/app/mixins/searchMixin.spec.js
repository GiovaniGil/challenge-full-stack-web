import { searchMixin, uiMixins } from 'App/mixins/';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/app/store';

const localVue = createLocalVue();
localVue.use(Vuex);

const Component = {
  render() {},
  mixins: [searchMixin, uiMixins],
};

describe('searchMixin.js', () => {

  it('verify search handle dados is catching errors', async () => {
    const vuetify = new Vuetify();
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      vuetify,
    });
    wrapper.vm.uiMixinErrorDialog = jest.fn()
    wrapper.vm.studentSetDataToList = jest.fn().mockRejectedValue()

    const pagination = { page: 1, limit: 10 }
    await wrapper.vm.searchMixinHandleDados({ pagination })

    expect(wrapper.vm.uiMixinErrorDialog).toHaveBeenCalledTimes(1);
    wrapper.destroy();
  });

  
});
