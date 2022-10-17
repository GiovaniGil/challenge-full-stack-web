import CrudRequest from '@/app/arch/crud/CrudRequest';

export default class StudentRequest extends CrudRequest {
  static baseUrl() {
    return 'student';
  }
}
