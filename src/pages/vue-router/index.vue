<template>
  <view>
    <navigation></navigation>
    <router-view></router-view>
    <nut-tabbar :bottom="true" @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
    </nut-tabbar>
  </view>
</template>

<script lang="ts" setup>
import { Home, My } from '@nutui/icons-vue-taro';
import { useRoute } from 'vue-router';
import navigation from './components/nav/navigation.vue';
const route = useRoute()
function tabSwitch(item, index) {
  // console.log(item, index);
  console.log(route)
}
</script>

<style lang="scss"></style>