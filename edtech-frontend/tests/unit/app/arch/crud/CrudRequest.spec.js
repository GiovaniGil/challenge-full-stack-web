import CrudRequest from 'Arch/crud/CrudRequest';

describe('CrudRequest.js', () => {
  it('Should throw a error if method baseUrl is not overrided', async () => {
    try {
      CrudRequest.baseUrl();
      expect('Deveria falhar').toEqual('Não deveria cair aqui');
    } catch (error) {
      await expect(error.message).toEqual('Method baseUrl not implemented');
    }
  });

  it('Should return a promisse on call integration methods', async () => {
    CrudRequest.baseUrl = jest.fn().mockReturnValue('/teste');
    expect(CrudRequest.list() instanceof Promise).toBeTruthy();
    expect(CrudRequest.save() instanceof Promise).toBeTruthy();
    expect(CrudRequest.edit() instanceof Promise).toBeTruthy();
    expect(CrudRequest.get() instanceof Promise).toBeTruthy();
    expect(CrudRequest.remove() instanceof Promise).toBeTruthy();
    expect(typeof CrudRequest.baseUrl()).toEqual('string');
  });
});
