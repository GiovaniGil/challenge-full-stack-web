export default {
  data: () => ({
    rules: {
      required: (value) => !!value || 'Obrigatório.',

      email: (value) =>
        /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        ) || 'E-mail inválido.',

      document: (value) => {
        if (!value) {
          return true;
        } else if (value && value.replace(/\D/g, '').length != 11) {
          return 'Documento inválido.';
        }
        return true;
      },
    },
  }),
};
