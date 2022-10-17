<template>
  <section class="ma-0">
    <StudentListComponent />
  </section>
</template>

<script>
export default {
  name: "StudentListPage",

  components: {
    StudentListComponent: () =>
      import("@/app/components/organisms/StudentListComponent.vue"),
  },
};
</script>