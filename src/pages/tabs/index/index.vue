<template>
  <view :class="$style.contentContainer" style="height: 800px;">
    <nut-button type="primary" @click="func">主要按钮</nut-button>
    <nut-button type="info">信息按钮</nut-button>
    <nut-button type="default">默认按钮</nut-button>
    <nut-button type="danger">危险按钮</nut-button>
    <nut-button type="warning">警告按钮</nut-button>
    <nut-button type="success">成功按钮</nut-button>
  </view>
</template>

<script lang="ts" setup>
import Taro from '@tarojs/taro'
import { useLayoutStore } from '@/store/store_modules/layoutInfo';
const func = () => {
  console.log('dianjile')
  Taro.navigateTo({ url: '/pages/temp/index' })
}
const layoutStore = useLayoutStore()
</script>

<style lang="css" module>
.contentContainer {
  margin-top: v-bind(layoutStore.navHeight + 'px');
}
</style>
