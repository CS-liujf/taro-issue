<template>
    <div>
        <router-view></router-view>
        <!-- <nut-button type="primary">主要按钮</nut-button> -->
        <nut-tabbar :bottom="true" @tab-switch="tabSwitch">
            <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
            <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
        </nut-tabbar>
    </div>
</template>

<script lang="ts" setup>
import { Home, My } from '@nutui/icons-vue-taro';
function tabSwitch(item, index) {
    console.log(item, index);
}
</script>

<style lang="scss"></style>