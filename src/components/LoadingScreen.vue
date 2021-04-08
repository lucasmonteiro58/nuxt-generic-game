<template>
  <div class="loading-screen">
    <div class="percentLogin"></div>
    <div class="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.loading-screen {
  position: absolute;
  @include flex-center;
  .lds-ellipsis {
    transform: scale(4);
  }
}
</style>
