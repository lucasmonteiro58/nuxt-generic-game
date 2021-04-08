<template>
  <section class="initial-page-container"></section>
</template>
<script>
export default {
  mounted() {
    this.$store.commit('changeBackground', 'bg-menu')
  },
  methods: {
    clickStart() {
      console.log('aaaaaaaaa')
    }
  }
}
</script>
<style lang="scss" scoped>
.initial-page-container {
  @include flex-center;
  flex-direction: column;
}
</style>
