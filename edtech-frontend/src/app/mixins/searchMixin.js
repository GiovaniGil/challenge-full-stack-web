import { mapActions, mapState } from 'vuex';
import { uiMixins } from './index';

export default {
  mixinns: [uiMixins],

  computed: {
    ...mapState({
      pagination: (state) => state.studentStore.pagination,
      filters: (state) => state.studentStore.filters,
    }),
  },

  methods: {
    ...mapActions({
      studentSetDataToList: 'studentStore/setDataToList',
      setFilter: 'studentStore/setFilter',
      setPagination: 'studentStore/setPagination',
    }),

    async searchMixinHandleDados({ pagination, ...data }) {
      this.setFilter({ ...this.filters, ...data });
      this.setPagination({ ...this.pagination, ...pagination });

      await this.studentSetDataToList({
        ...this.filters,
        ...this.pagination,
      }).catch(async (error) => {
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
