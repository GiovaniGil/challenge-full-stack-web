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
    },
  });
}

describe('StudentListHeaderComponent.vue', () => {

  it('emitting event', async () => {
    const wrapper = factory();
    wrapper.vm.setFilter = jest.fn()
    await wrapper.find('#newStudentButton').trigger('click');
    expect(pushMock).toBeCalledWith({"name": "new-student"});
    wrapper.destroy()
  });
  
  it('emitting event - keyboard', async () => {
    const wrapper = factory();
    wrapper.vm.setFilter = jest.fn();
    const onSearch = jest.spyOn(wrapper.vm, 'onSearch');
    const element = wrapper.findComponent({ ref: 'inputSearch' })
    element.trigger('keyup.enter');
    expect(onSearch).toHaveBeenCalled();
    wrapper.destroy();
  });
});
