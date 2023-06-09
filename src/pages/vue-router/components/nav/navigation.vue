<template>
  <view :class="$style['nav-container']">
    <view :class="$style['navBar-container']">
      <view :style="{ marginLeft: layoutStore.menuButtonInfo.rightMargin + 'px' }">
        <view @click="scanCode" :class="$style['scan-button']" :hover-class="$style['scan-button-hover']">
          <image :class="$style['img-class']" src="https://pic.imgdb.cn/item/648301861ddac507ccea787a.gif" />扫一扫
        </view>
      </view>
      <view>主页</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { useLayoutStore } from '@/store/store_modules/layoutInfo';
import Taro from '@tarojs/taro';
import { computed } from '@vue/reactivity';

const layoutStore = useLayoutStore();
const navHeight = computed(() => layoutStore.navHeight + 'px');
const statusBarHeight = computed(() => layoutStore.statusBarHeight + 'px');
const navBarHeight = computed(() => layoutStore.navBarHeight + 'px');
const imgSize = computed(() => (layoutStore.navBarHeight) * 22 / 40 + 'px');
const navBarWidth = computed(() => layoutStore.navBarWidth + 'px');

// Taro.scanCode({ onlyFromCamera: true, scanType: ['qrCode'],fail:(res)=>{} })
const scanCode = async () => {
  try {
    console.log('打开扫码')
    const res = await Taro.scanCode({ onlyFromCamera: true, scanType: ['qrCode'] })
    console.log(res)
  } catch (err) {
    console.log(err)
  }
}
</script>

<style lang="css" module>
.nav-container {
  height: v-bind(navHeight);
  /* background: skyblue; */
  background: rgb(255, 255, 255);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.navBar-container {
  /* 让里面的图片元素垂直居中 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: v-bind(statusBarHeight);
  height: v-bind(navBarHeight);
  width: v-bind(navBarWidth);
}

.scan-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 62px;
  font-size: 28px;
  border-radius: 62px;
  border: 1.2px, solid;
  border-color: rgb(240, 240, 240);
}

.scan-button-hover {
  background-color: rgb(238, 238, 238);
}

.img-class {
  width: v-bind(imgSize);
  height: v-bind(imgSize);
}
</style>
