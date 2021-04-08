<template>
  <div class="stage-wrap">
    <loading-screen id="loading-screen" />
    <div :class="background" class="background-image"></div>
    <nuxt id="stage-container" class="not-ready stage-container" />
  </div>
</template>

<script>
export default {
  computed: {
    background() {
      return this.$store.state.currentBackground || 'bg-menu'
    }
  }
}
</script>

<style lang="scss" scoped>
#loading-screen {
  position: absolute;
  width: 1920px;
  height: 1080px;
  @include flex-center;
}
.stage-container {
  position: relative;
  @include flex-center;
  width: 1920px;
  height: 1080px;
}

.background-image {
  width: 1920px;
  height: 1080px;
  position: absolute;
}
.not-ready {
  display: none;
}
</style>
