<template>
  <div id="app">
    <transition>
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<style lang="scss">
#app{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  transition: all .3;
  transform: translate3d(0,0,0);
}
</style>
