export default {
  data: () => ({
    loader: null,
  }),

  methods: {
    async uiMixinConfirmDialog(title, text) {
      return await this.$swal
        .fire({
          title,
          text,
          padding: '2em',
          showCancelButton: true,
          iconHtml: `<i aria-hidden="true" class="v-icon notranslate mdi mdi-help-circle-outline theme--light teal--text text--darken-2" style="font-size: 60px; color: #0277BD"></i>`,
          confirmButtonText: 'Sim',
          cancelButtonText: `Cancelar`,
          width: '430px',
          iconColor: 'transparent',
          confirmButtonColor: 'var(--v-primary-base)',
          cancelButtonColor: 'var(--v-error-base)',
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
          reverseButtons: true,
        })
        .then((result) => {
          return result.isConfirmed;
        });
    },

    async uiMixinSuccessDialog(title, text) {
      await this.$swal.fire(title, text, 'success');
    },
    async uiMixinErrorDialog(title, text) {
      await this.$swal.fire({
        icon: 'error',
        title,
        text,
      });
    },
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },

  watch: {
    loading: {
      handler(value) {
        if (value === true) this.loader = this.$loading.show();
        else this.loader.hide();
      },
    },
  },
};
