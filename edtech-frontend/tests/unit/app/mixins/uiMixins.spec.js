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

describe('uiMixins.js', () => {

  it('verify uiMixinConfirmDialog function', async () => {
    const vuetify = new Vuetify();
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      vuetify,
      mocks: {
        $swal: {
          fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
        },
      },
    });
    await wrapper.vm.uiMixinConfirmDialog();

    expect(wrapper.vm.$swal.fire).toHaveBeenCalledTimes(1);
    wrapper.destroy();
  });


  it('verify uiMixinSuccessDialog function', async () => {
    const vuetify = new Vuetify();
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      vuetify,
      mocks: {
        $swal: {
          fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
        },
      },
    });
    await wrapper.vm.uiMixinSuccessDialog();

    expect(wrapper.vm.$swal.fire).toHaveBeenCalledTimes(1);
    wrapper.destroy();
  });

  it('verify loader on change value - watch', async () => {
    const vuetify = new Vuetify();
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      vuetify,
      data() {
        return { loading: false };
      },
      mocks: {
        $swal: {
          fire: jest.fn().mockResolvedValue({ isConfirmed: true }),
        },
        $loading: {
          show: jest.fn().mockReturnValue(true),
        },
      },
    });
    
    wrapper.vm.loading = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.loader).toBeTruthy()
    
    wrapper.destroy();
  });

  it('verify loader on change value - watch', async () => {
    const vuetify = new Vuetify();
    const wrapper = shallowMount(Component, {
      store,
      localVue,
      vuetify,
      data() {
        return {
          loading: true,
          loader: {
            hide: jest.fn()
          }
        };
      },     
    });

    wrapper.vm.loading = false;
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.loader.hide).toHaveBeenCalledTimes(1);

    wrapper.destroy();
  });
});
