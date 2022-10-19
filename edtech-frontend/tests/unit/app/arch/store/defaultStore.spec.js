import store from '@/app/store';
import StudentRequest from 'App/request-classes/StudentRequest'


describe('defaultStore.js', () => {

  it('Store default - setData error', async () => {
    StudentRequest.get = jest.fn().mockRejectedValue(false);

    try {
      store._actions['studentStore/setData'][0]();
    } catch (erro) {
      expect(erro).toBe(false);
    }
  });
  
  it('Store default - get list error', async () => {
    StudentRequest.list = jest.fn().mockRejectedValue(false)

    try {
        store._actions['studentStore/setDataToList'][0]()
    } catch (erro) {
        expect(erro).toBe(false);
    }

  });

  it('Store default - get list success', async () => {
    StudentRequest.list = jest.fn().mockResolvedValue({ count: 1, limit: 1, page: 1, data: { label: 'test'}})
    
    const mockCommit = jest.fn()
    store.commit = mockCommit

    store._actions['studentStore/setDataToList'][0]();

    expect(mockCommit).toHaveBeenCalled();
  });

  it('Store default - remove error', async () => {
    StudentRequest.remove = jest.fn().mockRejectedValue(false);

    try {
      store._actions['studentStore/setRemoveData'][0]();
    } catch (erro) {
      expect(erro).toBe(false);
    }
  });

  it('Store default - remove success', async () => {
    StudentRequest.remove = jest.fn().mockResolvedValue({sucess: true });

    const response = store._actions['studentStore/setRemoveData'][0]();

    expect(response).toBeTruthy();
  });

  it('Store default - add data error', async () => {
    StudentRequest.save = jest.fn().mockRejectedValue(false);

    try {
      store._actions['studentStore/setAddData'][0]();
    } catch (erro) {
      expect(erro).toBe(false);
    }
  });

  it('Store default - add data success', async () => {
    StudentRequest.save = jest.fn().mockResolvedValue({ sucess: true });

    const response = store._actions['studentStore/setAddData'][0]();

    expect(response).toBeTruthy();
  });

   it('Store default - edit data error', async () => {
     StudentRequest.edit = jest.fn().mockRejectedValue(false);

     try {
       store._actions['studentStore/setAddData'][0]({ id: 1 });
     } catch (erro) {
       expect(erro).toBe(false);
     }
   });

   it('Store default - edit data success', async () => {
     StudentRequest.edit = jest.fn().mockResolvedValue({ sucess: true });

     const response = store._actions['studentStore/setAddData'][0]({ id: 1 });

     expect(response).toBeTruthy();
   });

  it('Store default - clear', async () => {
    const mockCommit = jest.fn();
    store.commit = mockCommit;
    store._actions['studentStore/clearState'][0]();

    expect(mockCommit).toHaveBeenCalled();
  });

 it('Store default - setPagination', async () => {
   const mockCommit = jest.fn();
   store.commit = mockCommit;
   store._actions['studentStore/setPagination'][0]();

   expect(mockCommit).toHaveBeenCalled();
 });

  /** Mutations */

  it('Store default - setDataToList - mutation', async () => {
    store._mutations['studentStore/setDataToList'][0]({
      count: 1,
      limit: 1,
      page: 1,
      data: { label: 'test' },
    });

    expect(store.getters['studentStore/getList']).toEqual({ label: 'test' });
    expect(store.getters['studentStore/getPagination']).toEqual({
      limit: 1,
      page: 1,
    });
    expect(store.getters['studentStore/getCount']).toEqual(1);
  });

  it('Store default - setPagination - mutation', async () => {
    store._mutations['studentStore/setPagination'][0]({
      limit: 1,
      page: 1,
    });

    expect(store.getters['studentStore/getPagination']).toEqual({
      limit: 1,
      page: 1,
    });
  });

  it('Store default - setData - mutation', async () => {
    store._mutations['studentStore/setData'][0]({
      data: true
    });
    expect(store.getters['studentStore/getData']).toEqual(true);
  });


  it('Store default - setLoading - mutation', async () => {
    store._mutations['studentStore/setLoading'][0](false);
    expect(store.getters['studentStore/getLoading']).toEqual(false);
  });


  it('Store default - setLoading - mutation', async () => {
    store._mutations['studentStore/setLoading'][0](false);
    expect(store.getters['studentStore/getLoading']).toEqual(false);
  });


  it('Store default - setFilter - mutation', async () => {
    store._mutations['studentStore/setFilter'][0]({ name: 'Test'});
    expect(store.getters['studentStore/getFilters']).toEqual({ name: 'Test'});
  });



});
