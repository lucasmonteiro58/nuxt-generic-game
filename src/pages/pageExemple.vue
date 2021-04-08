<template>
  <section class="container"></section>
</template>
<script>
export default {
  mounted() {
    this.$store.commit('changeBackground', 'bg-menu')
  }
}
</script>
<style lang="scss" scoped>
.container {
  @include flex-center;
  flex-direction: column;
}
</style>
