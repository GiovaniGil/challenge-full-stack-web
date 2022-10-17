import { mount } from '@vue/test-utils';
import StudentFormPage from 'App/components/pages/student/StudentFormPage.vue';
import Vuetify from 'vuetify';

const pushMock = jest.fn().mockResolvedValue();

function factory() {
  const vuetify = new Vuetify();
  const div = document.createElement('div');
  document.body.appendChild(div);

  return mount(StudentFormPage, {
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

describe('StudentFormPage.vue', () => {
  it('Is vue instance', () => {
    const wrapper = factory();
    expect(wrapper).toBeTruthy();
    wrapper.destroy();
  });
});
