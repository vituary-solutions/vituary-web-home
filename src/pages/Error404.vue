<template>
  <div class="fixed-center text-center">
    <div class="text-h3 q-pb-md">Page Not Found</div>
    <q-btn
      color="secondary"
      @click="$router.push('/')"
    >Go back</q-btn>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style lang="stylus">
</style>
