import StudentRequest from 'App/request-classes/StudentRequest';

describe('StudentRequest.js', () => {
    
  it('Should throw a error if method baseUrl is not overrided', async () => {
    try {
      expect(StudentRequest.baseUrl()).toEqual('student');
    } catch (error) {
      await expect(error.message).toEqual('Method baseUrl not implemented');
    }
  });
    
    it('Should throw a error if method baseUrl is not overrided', async () => {
      StudentRequest.baseUrl = jest.fn().mockRejectedValue(false);
      try {
        StudentRequest.baseUrl();
      } catch (error) {
        await expect(error.message).toEqual('Method baseUrl not implemented');
      }
    });


});
