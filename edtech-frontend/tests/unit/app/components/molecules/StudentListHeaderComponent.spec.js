import { mount } from '@vue/test-utils';
import StudentListHeaderComponent from 'App/components/molecules/StudentListHeaderComponent.vue';
import Vuetify from 'vuetify';

const pushMock = jest.fn().mockResolvedValue();

function factory() {

  const vuetify = new Vuetify();
  const div = document.createElement('div');
  document.body.appendChild(div);
    
  return mount(StudentListHeaderComponent, {
    vuetify,
    attachTo: div,
    sync: false,
    propsData: {},
    mocks: {
      $router: {
        push: pushMock,
      },
      setFilter: jest.fn()
    }
  });
}

describe('StudentListHeaderComponent.vue', () => {

  it('emitting event', async () => {
    const wrapper = factory();
    await wrapper.find('#newStudentButton').trigger('click');
    expect(pushMock).toBeCalledWith({"name": "new-student"});
    wrapper.destroy()
  });
  
  it('emitting event', async () => {
    const wrapper = factory();
    const onSearch = jest.spyOn(wrapper.vm, 'onSearch');
    const element = wrapper.findComponent({ ref: 'inputSearch' })
    element.trigger('keyup.enter');
    expect(onSearch).toHaveBeenCalled();
    wrapper.destroy();
    });
});
