<template>
  <v-data-table
    dense
    :headers="headers"
    :items="studentsList"
    :footer-props="footerProps"
    :disable-sort="$vuetify.breakpoint.xsOnly"
    class="flex-grow-1 d-flex flex-column justify-space-between table-striped"
  >
    <template v-slot:item.actions="{ item }">
      <v-btn text @click="onEditItem(item)">
        <v-icon small class="mr-2" color="orange"> mdi-pencil </v-icon>
        Editar
      </v-btn>
      <v-btn text @click="onDeleteItem(item)">
        <v-icon small class="mr-2" color="pink"> mdi-delete </v-icon>
        Excluir
      </v-btn>
    </template>
    <template v-slot:no-data >
      <div class="flex-grow-1 align-self-center">
        Nenhum aluno encontrado!
      </div>
    </template>
  </v-data-table>
</template>

<script>
import { uiMixins, searchMixin } from "@/app/mixins";
import { mapActions, mapState } from "vuex";

export default {
  name: "StudentListDataTableComponent",

  mixins: [uiMixins, searchMixin],

  data() {
    return {
      headers: [
        {
          text: "Registro Acadêmico",
          align: "center",
          sortable: false,
          value: "academic_registry",
          width: "20%",
        },
        {
          text: "Nome",
          align: "center",
          sortable: false,
          value: "name",
          width: "20%",
        },
        {
          text: "CPF",
          align: "center",
          sortable: false,
          value: "document",
          width: "20%",
        },
        {
          text: "E-mail",
          align: "center",
          sortable: true,
          value: "email",
          width: "20%",
        },
        {
          text: "Ações",
          align: "center",
          sortable: false,
          value: "actions",
          width: "25%",
        },
      ],
      footerProps: {
        "items-per-page-text": "Registros por página",
        pageText: "{0}-{1} de {2}",
      },
    };
  },

  computed: {
    ...mapState({
      studentsList: (state) => state.studentStore.list,
    }),
  },

  methods: {
    ...mapActions({
      setRemoveData: "studentStore/setRemoveData",
    }),

    onEditItem(item) {
      this.$router.push({ name: "edit-student", params: { id: item?.id } });
    },

    async reloadData() {
      await this.searchMixinHandleDados();
    },

    async onDeleteItem(item) {
      const confirm = await this.uiMixinConfirmDialog(
        "Confirmação",
        "Deseja excluir o registro?"
      );

      if (confirm) {
        this.setRemoveData(item)
          .then(async () => {
            await this.uiMixinSuccessDialog(
              "Sucesso!",
              "Registro removido com sucesso."
            );
            await this.reloadData();
          })
          .catch(async ({ response }) => {
            await this.uiMixinErrorDialog(
              "Oops...",
              `Ocorreu um erro durante a exclusão: ${response?.data?.message}`
            );
          });           
      }
    },
  },
};
</script>

<style lang="sass">
.table-striped
    tbody tr:nth-of-type(odd)
        background-color: #E3F2FD

    tbody tr:nth-of-type(even)
        background-color: white

.v-data-table--mobile
  .v-data-table__empty-wrapper        
    td
      display: flex
</style>