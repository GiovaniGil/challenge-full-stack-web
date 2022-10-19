<template>
  <v-form ref="form" @submit.prevent="">
    <v-card height="100%" class="container mt-4" elevation="0">
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <InputTextComponent
              v-model="payload.name"
              ref="name"
              label="Nome"
              placeholder="Informe o nome completo"
              :rules="[rules.required]"
            />
          </v-col>
          <v-col cols="12">
            <InputTextComponent
              v-model="payload.email"
              ref="email"
              type="email"
              label="E-mail"
              placeholder="Informe apenas um e-mail"
              :rules="[rules.required, rules.email]"
            />
          </v-col>
          <v-col cols="12">
            <InputTextComponent
              v-model="payload.academicRegistry"
              ref="academicRegistry"
              label="RA"
              placeholder="Informe o registro acadêmico"
              :rules="[rules.required]"
              :disabled="isUpdate"
            />
          </v-col>
          <v-col cols="12">
            <InputTextComponent
              v-model="payload.document"
              ref="document"
              label="CPF"
              placeholder="Informe o número do documento"
              :rules="[rules.document, rules.required]"
              :disabled="isUpdate"
              v-mask="'###.###.###-##'"
            />
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="onCancel" color="error" large>Cancelar</v-btn>
        <v-btn @click="onSave" color="primary" large>Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { uiMixins, mixinRules } from "@/app/mixins";

export default {
  name: "StudentFormComponent",

  mixins: [uiMixins, mixinRules],

  components: {
    InputTextComponent: () =>
      import("@/app/components/atoms/InputTextComponent.vue"),
  },

  props: {
    id: {
      type: [Number, String],
      default: null,
    },
  },

  data() {
    return {
      payload: {
        name: null,
        email: null,
        academicRegistry: null,
        document: null,
      },
    };
  },

  computed: {
    ...mapState({
      studentData: (state) => state.studentStore.data,
    }),

    isUpdate() {
      return this.id !== null && this.id !== "";
    },
  },

  async created() {
    await this.getStudentData();
  },

  methods: {
    ...mapActions({
      setAddData: "studentStore/setAddData",
      setData: "studentStore/setData",
    }),
    
    async getStudentData() {
      if (this.isUpdate) {
        await this.setData({ id: this.id });
        this.payload = this.studentData;
      }
    },

    backPage() {
      this.$router.go(-1);
    },
    onCancel() {
      this.backPage();
    },

    async onSave() {
      if (!this.validateForm()) {
        return;
      }

      const confirm = await this.uiMixinConfirmDialog(
        "Confirmação",
        "Deseja salvar o registro?"
      );

      if (confirm) {
        this.setAddData(this.payload)
          .then(async () => {
            await this.uiMixinSuccessDialog(
              "Sucesso!",
              "Registro persistido com sucesso."
            );
            this.backPage();
          })
          .catch(async ({ response }) => {
            await this.uiMixinErrorDialog(
              "Oops...",
              `Ocorreu um erro durante a persistência dos dados: ${response?.data?.message}`
            );
          });
      }
    },

    validateForm() {
      const validateFields = [
        this.$refs.form.validate(),
        this.$refs.name.validate(),
        this.$refs.email.validate(),
        this.$refs.academicRegistry.validate(),
        this.$refs.document.validate(),
      ];

      return validateFields.every(Boolean);
    },
  },
};
</script>
