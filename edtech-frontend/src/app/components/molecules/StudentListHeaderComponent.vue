<template>
  <v-row>
    <v-col cols="12" md="9">
      <InputSearchComponent
        ref="inputSearch"
        @search="onSearch($event)"
        showSearchButton
        outlined
        dense
        placeholder="Digite sua busca"
      />
    </v-col>
    <v-col cols="12" md="1">
      <v-btn id="newStudentButton" @click="onNewStudent" color="secondary" block large
        >Cadastrar aluno</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import { searchMixin } from "@/app/mixins";

export default {
  name: "StudentListHeaderComponent",

  mixins: [searchMixin],

  components: {
    InputSearchComponent: () =>
      import("@/app/components/atoms/InputSearchComponent.vue"),
  },

  methods: {
    onNewStudent() {
      this.$router.push({ name: "new-student" });
    },

    onSearch(term) {
      this.seachMixinHandleDados({ term });
    },
  },
};
</script>
