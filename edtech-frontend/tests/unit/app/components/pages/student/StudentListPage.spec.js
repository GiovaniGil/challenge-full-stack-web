import { mount } from '@vue/test-utils';
import StudentListPage from 'App/components/pages/student/StudentListPage.vue';
import Vuetify from 'vuetify';

const pushMock = jest.fn().mockResolvedValue();

function factory() {
  const vuetify = new Vuetify();
  const div = document.createElement('div');
  document.body.appendChild(div);

  return mount(StudentListPage, {
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

describe('StudentListPage.vue', () => {
  it('Is vue instance', () => {
    const wrapper = factory();
    expect(wrapper).toBeTruthy();
    wrapper.destroy();
  });
});
