<template>
  <div
    class="student-list d-flex flex-column justify-space-between"
    style="min-height: calc(100vh - 64px)"
  >
    <v-card
      color="white"
      elevation="2"
      min-height="100px"
      width="100%"
      class="mb-5 px-5 d-flex flex-column justify-center"
      :class="isMobile ? 'py-4' : ''"
    >
      <v-card-actions>
        <StudentListHeaderComponent />
      </v-card-actions>
    </v-card>
    <StudentListDataTableComponent @onPagination="onPagination" :pagination.sync="pagination.pagination"/>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { searchMixin, uiMixins } from "@/app/mixins";

export default {
  name: "StudentListComponent",

  mixins: [searchMixin, uiMixins],

  components: {
    StudentListHeaderComponent: () =>
      import("@/app/components/molecules/StudentListHeaderComponent.vue"),
    StudentListDataTableComponent: () =>
      import("@/app/components/molecules/StudentListDataTableComponent.vue"),
  },

  computed: {
    ...mapState({
      loading: (state) => state.studentStore.loading,
    }),   
  },
  
  methods: {
    ...mapActions({
      setPagination: 'studentStore/setPagination'
    }),

    async onPagination(pagination) {
      pagination = { page: pagination?.page, limit: pagination?.itemsPerPage }   
      await this.searchMixinHandleDados({ pagination })
    }
  },

};
</script>

