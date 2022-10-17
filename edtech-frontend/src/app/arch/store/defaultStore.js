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
          limit: 0,
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
        getListFilter(state) {
          return state.filters;
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
            return await RequestClass.edit(data?.id, data)
              .then((data) => data)
              .catch((error) => {
                console.log(error)
                throw error;
              });
          }
          return await RequestClass.save(data)
            .then((data) => data)
            .catch((error) => {
              throw error;
            });
        },
        async setRemoveData(_, data) {
          return await RequestClass.remove(data?.id)
            .then((data) => data)
            .catch((error) => {
              throw error;
            });
        },
        setDataToList({ commit }, data) {
          commit('setLoading', true);
          return RequestClass.list(data)
              .then((response) => {
                const results = response?.data?.data || [];
                const count = response?.data?.count || 0;
                const limit = count > 1 ? Math.ceil(count / 10) : 1;
                const page = data?.page || 1;

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
