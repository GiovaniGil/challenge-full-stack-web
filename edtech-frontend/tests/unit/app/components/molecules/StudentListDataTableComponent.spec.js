import { mount } from '@vue/test-utils';
import StudentListDataTableComponent from 'App/components/molecules/StudentListDataTableComponent.vue';
import Vuetify from 'vuetify';
import store from '@/app/store';

const pushMock = jest.fn().mockResolvedValue();
  
function factory() {

  const vuetify = new Vuetify();
  const div = document.createElement('div');
  document.body.appendChild(div);
    
  return mount(StudentListDataTableComponent, {
    vuetify,
    store,
    attachTo: div,
    sync: false,
    propsData: {},
    mocks: {
      $router: {
        push: pushMock,
      },
      setFilter: jest.fn(),
    },
  });
}

describe('StudentListDataTableComponent.vue', () => {
  it('Is a vue stance', async () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance).toBeTruthy();
    wrapper.destroy();
  });

  it('On edit item', () => {
    const wrapper = factory();

    wrapper.vm.onEditItem({ id: 1 });

    expect(pushMock).toHaveBeenCalledWith({
      name: 'edit-student',
      params: { id: 1 },
    });

    wrapper.destroy();
  });

  it('On delete item', async () => {
    const wrapper = factory();
    const spyHandleDados = jest
      .spyOn(wrapper.vm, 'searchMixinHandleDados')

    wrapper.vm.uiMixinConfirmDialog = jest.fn().mockReturnValue(true);
    wrapper.vm.setRemoveData = jest.fn().mockResolvedValue(true);
    wrapper.vm.uiMixinSuccessDialog = jest.fn();

    await wrapper.vm.onDeleteItem({ id: 1 });
    await Promise.resolve();

    expect(spyHandleDados).toHaveBeenCalledTimes(1);
    wrapper.destroy();
  });

   it('On delete item - error', async () => {
    const wrapper = factory();
    const spyHandleDados = jest.spyOn(wrapper.vm, 'uiMixinErrorDialog');
     
    wrapper.vm.uiMixinConfirmDialog = jest.fn().mockReturnValue(true);
    wrapper.vm.setRemoveData = jest
      .fn()
      .mockRejectedValue({ data: { message: 'Error' } });
    

    await wrapper.vm.onDeleteItem({});
    await Promise.resolve();

    expect(spyHandleDados).toHaveBeenCalledTimes(1);
    wrapper.destroy();
  });
  
  it('On delete item - not confirming', async () => {
    const wrapper = factory();

    wrapper.vm.uiMixinConfirmDialog = jest.fn().mockReturnValue(false);
    wrapper.vm.setRemoveData = jest.fn();

    await wrapper.vm.onDeleteItem({});
    await Promise.resolve();

    expect(wrapper.vm.setRemoveData).toHaveBeenCalledTimes(0);
    wrapper.destroy();
  });


});
