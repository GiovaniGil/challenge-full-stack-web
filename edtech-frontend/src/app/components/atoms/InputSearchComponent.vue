<template>
  <v-text-field
    v-model="value"
    v-bind="$attrs"
    @keyup.enter.native="$emit('search', value)"
    @click:clear="$emit('input', ''), $emit('search')"
    append-icon="mdi-magnify"
    hide-details
  >
    <v-sheet
      v-if="showSearchButton"
      slot="append"
      class="
        mt-n2
        mr-n3
        elevation-0
        d-flex
        flex-column
        justify-center
        align-end
      "
      ><span class="bold">
        <v-btn
          id="searchButton"
          depressed
          color="primary"
          large
          block
          @click="$emit('search', value)"
          ><v-icon>mdi-magnify</v-icon> {{ label }}</v-btn
        >
      </span>
    </v-sheet>
  </v-text-field>
</template>

<script>
export default {
  name: "InputSearchComponent",

  props: {
    label: {
      type: String,
      default: "Pesquisar",
    },

    showSearchButton: {
      type: Boolean,
    },
  },

  data() {
    return {
      value: "",
    };
  },
};
</script>
