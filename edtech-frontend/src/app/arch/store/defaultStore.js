export default (RequestClass) => {
  return {
    store: {
      namespaced: true,
      state: {
        list: [],
        data: {},
        loading: false,
        pagination: {
          page: 1,
          limit: 10,
          count: 0,
        },
        filters: {},
      },
      getters: {
        getList(state) {
          return state.list;
        },
        getData(state) {
          return state.data;
        },
        getLoading(state) {
          return state.loading;
        },
        getFilters(state) {
          return state.filters;
        },
        getPagination(state) {
          return {
            limit: state.pagination.limit,
            page: state.pagination.page,
          };
        },
        getCount(state) {
          return state.pagination.count;
        },
      },
      mutations: {
        setDataToList(state, payload) {
          const { data, count, page, limit } = payload;
          state.list = data;
          state.pagination.count = count;
          state.pagination.limit = limit;
          state.pagination.page = page;
        },
        setData(state, payload) {
          const { data } = payload;
          state.data = data;
        },
        clearState(state) {
          state.list = [];
          state.data = {};
          state.loading = false;
          state.pagination = {
            page: 1,
            limit: 10,
            count: 0,
          };
          state.filters = {};
        },
        setLoading(state, payload) {
          state.loading = payload;
        },
        setPagination(state, payload) {
          state.pagination.limit = payload.limit;
          state.pagination.page = payload.page;
        },
        setFilter(state, payload) {
          state.filters = {
            ...payload,
          };
          state.pagination.page = 1;
        },
      },
      actions: {
        setPagination({ commit }, data) {
          commit('setPagination', data);
        },
        setFilter({ commit }, data) {
          commit('setFilter', data);
        },
        setData({ commit }, payload) {
          commit('setLoading', true);
          commit('clearState');
          
          return RequestClass.get(payload?.id)
          .then(({ data }) => {                      
              commit('setData', {
                data: data?.data,
              });

              return data;
            })
            .catch((error) => {
              throw error;
            })
            .finally(() => {
              commit('setLoading', false);
            });
        },
        async setAddData(_, data) {
          if (data?.id) {
            return RequestClass.edit(data?.id, data)
              .then((data) => data)
              .catch((error) => {
                throw error;
              });
          }
          return RequestClass.save(data)
            .then((data) => data)
            .catch((error) => {
              throw error;
            });
        },
        async setRemoveData(_, data) {
          return RequestClass.remove(data?.id)
            .then((data) => data)
            .catch((error) => {
              throw error;
            });
        },
        setDataToList({ commit, state }) {
          commit('setLoading', true);
          
          return RequestClass.list( { ...state.filters, ...state.pagination})
            .then((response) => {
              const results = response?.data?.data ;
              const count = response?.data?.count;
              const limit = response?.data?.limit;
              const page = response?.data?.page;

              commit('setDataToList', {
                data: results,
                count,
                limit,
                page,
              });
              
            })
            .catch((error) => {
              throw error;
            })
            .finally(() => {
              commit('setLoading', false);
            });
        },

        clearState({ commit }) {
          commit('clearState');
        },
      },
    },
  };
};
