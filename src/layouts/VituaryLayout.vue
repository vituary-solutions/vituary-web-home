<template>
  <q-layout view="hhh lpR fff">

    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-toolbar-title><router-link to="/"><q-img src="statics/logos/logo-horizontal-text.png" class="header-logo" /></router-link></q-toolbar-title>

        <q-btn flat round icon="fab fa-github" type="a" target="_blank" href="https://github.com/vituary-solutions"><q-tooltip>Github</q-tooltip></q-btn>
        <q-btn flat round icon="fab fa-linkedin" type="a" target="_blank" href="https://www.linkedin.com/company/vituary"><q-tooltip>LinkedIn</q-tooltip></q-btn>
        <q-btn flat round icon="fab fa-twitter" type="a" target="_blank" href="https://twitter.com/vituarysol"><q-tooltip>Twitter</q-tooltip></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">© 2019 - 2020 Vituary Solutions Inc.</q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
export default {
  name: 'VituaryLayout'
}
</script>

<style lang="stylus">
.header-logo
  height 38px
  width 278px
</style>
