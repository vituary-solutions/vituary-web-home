<template>
  <div id="app">
    <q-toolbar class="header bg-primary text-white">
      <q-toolbar-title><router-link to="/">Vituary Solutions</router-link></q-toolbar-title>

      <q-btn flat round icon="fab fa-github" type="a" href="https://github.com/jguertin"><q-tooltip>Github</q-tooltip></q-btn>
      <q-btn flat round icon="fab fa-linkedin" type="a" href="https://www.linkedin.com/in/justinguertin"><q-tooltip>LinkedIn</q-tooltip></q-btn>
      <q-btn flat round icon="fab fa-twitter" type="a" href="https://twitter.com/jguertin"><q-tooltip>Twitter</q-tooltip></q-btn>
    </q-toolbar>

    <router-view></router-view>

    <div class="copyright q-pt-md text-center">© 2019 Vituary Solutions Inc.</div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
.copyright
  color #2c3e50
.header a
  text-decoration inherit
  color inherit
</style>
