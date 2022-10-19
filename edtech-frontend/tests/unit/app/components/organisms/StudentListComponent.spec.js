import { shallowMount, createLocalVue } from '@vue/test-utils';
import StudentListComponent from 'App/components/organisms/StudentListComponent.vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/app/store';

const localVue = createLocalVue();
localVue.use(Vuex)

const pushMock = jest.fn().mockResolvedValue();

function factory() {

  const vuetify = new Vuetify({
    breakpoint: {
      mobileBreakpoint: 'sm',
    },
  });
 
  const div = document.createElement('div');
  document.body.appendChild(div);

  return shallowMount(StudentListComponent, {
    store,
    localVue,
    vuetify,
    attachTo: div,
    sync: false,
    propsData: {},
    mocks: {
      $router: {
        push: pushMock,
      },    
      $vuetify: {
        breakpoint: {
          mobile: 'sms'
        }
      }
    },    
  });
}

describe('StudentListComponent.vue', () => {
  it('Is vue instance', () => {
    const wrapper = factory();
    expect(wrapper).toBeTruthy();
    wrapper.destroy();
  });
});
