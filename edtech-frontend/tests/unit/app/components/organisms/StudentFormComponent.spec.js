import { mount, createLocalVue } from '@vue/test-utils';
import StudentFormComponent from 'App/components/organisms/StudentFormComponent.vue';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import store from '@/app/store';

const localVue = createLocalVue()
localVue.use(Vuex)

jest.mock('App/request-classes/StudentRequest', () => ({
  get: jest.fn().mockResolvedValue({ data: { data: { name: 'Test', email: 'test@test.com', academicRegistry: '123456', document: '123.456.456-45' } } }),
}));

const pushMock = jest.fn().mockResolvedValue();

function factory({ props, mocks }) {
  
  const vuetify = new Vuetify();
  const div = document.createElement('div');
  document.body.appendChild(div);

  return mount(StudentFormComponent, {
    store,
    vuetify,
    attachTo: div,
    sync: false,
    propsData: { ...props },
    mocks: {
      $router: {
        push: pushMock,
      },
      ...mocks,
    },
  });
}

describe('StudentFormComponent.vue', () => {
  it('Is vue instance', () => {
    const wrapper = factory( {});
    expect(wrapper).toBeTruthy();
    wrapper.destroy();
  });

  it('Editing student',  async () => {
    const wrapper = factory({ props: { id: 1 } });
    await wrapper.vm.getStudentData();

    expect(wrapper.vm.payload.name).toBe('Test');
    wrapper.destroy();
  });

  
});
