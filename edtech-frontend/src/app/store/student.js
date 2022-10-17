import defaultStore from '@/app/arch/store/defaultStore';
import StudentRequest from '@/app/request-classes/StudentRequest';

const { store } = defaultStore(StudentRequest);

export default {
  ...store,
};
