<template>
  <v-app>
    <menu-drawer></menu-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="changeMenuState"></v-app-bar-nav-icon>
  <v-toolbar-title>{{ $route.name }}</v-toolbar-title>      
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MenuDrawer from "./components/MenuDrawer.vue";
export default {
  name: "App",
  components: { MenuDrawer },
  data: () => ({
    //
  }),
  methods: {
    changeMenuState() {
      this.$store.commit("drawer/changeDrawerState");
    },
  },
};
</script>
