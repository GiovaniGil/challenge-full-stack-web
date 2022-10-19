import { mapActions } from 'vuex';
import { uiMixins } from './index';

export default {
  mixinns: [uiMixins],

  methods: {
    ...mapActions({
      studentSetDataToList: 'studentStore/setDataToList',
      setFilter: 'studentStore/setFilter',
    }),

    async searchMixinHandleDados(data) {
      await this.studentSetDataToList(data).catch(async (error) => {
        await this.uiMixinErrorDialog(
          'Oops...',
          `Ocorreu um erro durante a busca: ${error}`
        );
      });
    },
  },
  destroyed() {
    this.setFilter();
  },
};
