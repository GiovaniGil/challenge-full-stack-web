<template>
  <section class="ma-0">
    <StudentFormComponent v-bind="$props" />
  </section>
</template>

<script>
export default {
  name: "StudentFormPage",

  props: {
    id: {
      type: [Number, String],
      default: null,
    },
  },

  components: {
    StudentFormComponent: () =>
      import("@/app/components/organisms/StudentFormComponent.vue"),
  },
};
</script>