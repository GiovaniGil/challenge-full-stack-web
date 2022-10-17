<template>
  <v-app>
    <DefaultTemplate />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    DefaultTemplate: () =>
      import("@/app/components/templates/DefaultTemplate.vue"),
  },

  beforeDestroy() {
    this.clearStudentState();
  },

  methods: {
    ...mapActions({
      clearStudentState: "studentStore/clearState",
    }),
  },
};
</script>

