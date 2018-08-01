<template>
  <transition name="fade">
    <div class="loading" v-show="visible">
      <div class="loading-mask" :style="{background: styleBG}"></div>
      <div class="loading-toast">
        <img v-if="!hideIcon" class="toast-img" src="./loading.gif">
        <p class="toast-content">{{msg}}</p>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    msg: {
      type: String,
      default: ''
    },
    hideIcon: {
      type: Boolean,
      default: false
    },
    styleBG: {
      type: String,
      default: 'transparent'
    }
  },
  data() {
    return {
      visible: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';

.loading{
  &-mask{
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  &-toast{
    @include px2rem(padding, 30);
    @include px2rem(border-radius, 10);
    color: #fff;
    position: fixed;
    z-index: 5000;
    left: 50%;
    top: 20%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background: rgba(17, 17, 17, 0.7);
    text-align: center;
    .toast-img{
      @include px2rem(width, 80);
      @include px2rem(height, 80);
      vertical-align: baseline;
      &+.toast-content{
        @include px2rem(margin-top, 10)
      }
    }
    .toast-content{
      @include px2rem(font-size, 28);
      line-height: 1.2;
    }
  }
}
</style>
