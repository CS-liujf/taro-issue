<template>
    <div>
        <router-view></router-view>
        <!-- <nut-button type="primary">主要按钮</nut-button> -->
        fsdfsdf
        <nut-tabbar @tab-switch="tabSwitch">
            <nut-tabbar-item tab-title="标签" :icon="Home"></nut-tabbar-item>
            <nut-tabbar-item tab-title="标签" :icon="Category"> </nut-tabbar-item>
            <nut-tabbar-item tab-title="标签" :icon="Find"></nut-tabbar-item>
            <nut-tabbar-item tab-title="标签" :icon="Cart"></nut-tabbar-item>
            <nut-tabbar-item tab-title="标签" :icon="My"></nut-tabbar-item>
        </nut-tabbar>
    </div>
</template>

<script lang="ts" setup>
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';
function tabSwitch(item, index) {
    console.log(item, index);
}
</script>

<style lang="scss"></style>