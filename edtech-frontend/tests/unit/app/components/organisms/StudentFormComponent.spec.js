import { mount } from '@vue/test-utils';
import StudentFormComponent from 'App/components/organisms/StudentFormComponent.vue';
import Vuetify from 'vuetify';

const pushMock = jest.fn().mockResolvedValue();

function factory() {
  const vuetify = new Vuetify();
  const div = document.createElement('div');
  document.body.appendChild(div);

  return mount(StudentFormComponent, {
    vuetify,
    attachTo: div,
    sync: false,
    propsData: {},
    mocks: {
      $router: {
        push: pushMock,
      },
    },
  });
}

describe('StudentFormComponent.vue', () => {
  it('Is vue instance', () => {
    const wrapper = factory();
    expect(wrapper).toBeTruthy();
    wrapper.destroy();
  });

  
});
