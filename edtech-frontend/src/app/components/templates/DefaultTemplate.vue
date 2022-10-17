<template>
  <div>
    <v-app-bar app clipped-right>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="flex-grow-1 text-center">
        <router-link :to="{ name: 'home' }">
          <span class="text-h6 text-uppercase">{{
            $route.meta.pageTitle
          }}</span>
        </router-link>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app style="overflow: visible">
      <v-toolbar class="justify-center d-flex nav-bar__logo mb-5">
        <span class="title text-uppercase">Módulo acadêmico</span>
      </v-toolbar>

      <div>
        <div>
          <div
            v-for="(route, index) in routes"
            :key="`route-${index}`"
            class="d-flex align-center pl-6 mb-2"
            :class="getActiveClass(route)"
          >
            <span>
              <v-icon>{{ route.icon }}</v-icon></span
            >
            <router-link
              v-if="route.isRoute"
              :key="`route-${index}`"
              :to="{ name: route.name }"
            >
              <div class="pa-2">
                <span>{{ route.label }}</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </v-navigation-drawer>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
  </div>
</template>

<script>
import { uiMixins } from "@/app/mixins";

function buildRoute(label, icon, name, path, isRoute = true) {
  return {
    icon,
    label,
    name,
    path,
    isRoute,
  };
}

export default {
  name: "DefaultTemplate",

  mixins: [uiMixins],

  data() {
    return {
      drawer: null,
      dialog: false,
      routes: [
        buildRoute("Alunos", "mdi-account-box", "students", "/students/"),
      ],
      activeClass: {
        menuActive: true,
        bold: true,
        "arrow-right": true,
      },
    };
  },

  methods: {
    getActiveClass(route) {
      const actualRouteName = this.$route.name;

      const selectedItem = this.$route?.matched.map((el) =>
        el.regex.test(route.path)
      );

      if (actualRouteName === route.name || selectedItem.some(Boolean)) {
        return this.activeClass;
      }
      return {};
    },
  },
};
</script>

<style lang="sass">
.fade-enter-active,
.fade-leave-active
  transition-duration: 0.2s
  transition-property: opacity
  transition-timing-function: ease

.fade-enter,
.fade-leave-active
  opacity: 0

.arrow-right
  height: 35px
  background: $primary
  width: 100%
  margin: 1px

  &:after
    content: ""
    position: absolute
    left: 99%
    z-index: 1
    border: 20px dotted transparent
    border-left: 20px dotted $primary
</style>