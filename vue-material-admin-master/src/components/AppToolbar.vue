<template>
  <v-toolbar
    color="primary"
    fixed
    dark
    app
    >
    <v-toolbar-title class="ml-0 pl-3">
    </v-toolbar-title>
      <v-toolbar-side-icon @click.stop="handleDrawerToggle"></v-toolbar-side-icon>

      <v-spacer></v-spacer>
        <v-btn large
          v-if="$store.state.isUserLoggedIn"
          flat
          dark
          @click="logout">
          Log Out
        </v-btn>
  </v-toolbar>
</template>
<script>

import Util from '@/util';
export default {
  name: 'app-toolbar',
  components: {
  },
  data: () => ({
    items: [
      {
        icon: 'fullscreen_exit',
        href: '#',
        title: 'Logout',
        click: (e) => {
          window.getApp.$emit('APP_LOGOUT');
        }
      }
    ],
  }),
  computed: {
    toolbarColor () {
      return this.$vuetify.options.extra.mainNav;
    }
  },
  methods: {
    handleDrawerToggle () {
      window.getApp.$emit('APP_DRAWER_TOGGLED');
    },
    handleFullScreen () {
      Util.toggleFullScreen();
    },
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Root'
      })
    }
  }
};
</script>
