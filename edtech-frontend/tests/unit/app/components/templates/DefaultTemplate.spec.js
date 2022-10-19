import { mount, createLocalVue } from '@vue/test-utils';
import DefaultTemplate from '@/app/components/templates/DefaultTemplate.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();
let vuetify = new Vuetify();

describe('DefaultTemplate.vue', () => {

  it('Is a Vue Instance', () => {
    const wrapper = mount(DefaultTemplate, {
      vuetify,
      mocks: {
        $route: {
          name: 'test',
          meta: {
            pageTitle: 'test',
          },
          matched: [],
        },
      },
      stubs: ['router-link', 'router-view'],
    });
    expect(wrapper).toBeTruthy();
    wrapper.destroy();
  });

   it('Is a Vue Instance', () => {
     const wrapper = mount(DefaultTemplate, {
       vuetify,
       mocks: {
         $route: {
           name: 'test',
           meta: {
             pageTitle: 'test',
           },
           matched: [],
         },
       },
       stubs: ['router-link', 'router-view'],
     });

     const activeClass = wrapper.vm.getActiveClass({ name: 'test'})
     expect(activeClass).toEqual({
       menuActive: true,
       bold: true,
       'arrow-right': true,
     });
     wrapper.destroy();
   });
});
