<template>
  <v-form ref="form">
    <v-text-field
      v-model="valorModel"
      v-bind="$attrs"
      outlined
      dense
      :rules="rules"
    >
      <v-sheet
        slot="prepend-inner"
        width="150px"
        height="40px"
        color="grey lighten-2"
        class="
          ml-n3
          mt-n2
          elevation-0
          d-flex
          flex-column
          justify-center
          pa-4
          mr-3
        "
        v-if="label"
        ><span class="bold"> {{ label }} </span>
      </v-sheet>
    </v-text-field>
  </v-form>
</template>

<script>
export default {
  name: "InputTextComponent",

  props: {
    label: {
      type: String,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
    },
  },

  computed: {
    valorModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },

  methods: {
    validate() {
      return this.$refs.form.validate();
    },
  },
};
</script>