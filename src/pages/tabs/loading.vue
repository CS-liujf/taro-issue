<template>
    <view class="loading-container">
        <view class="loader7">
            <view style="--i:1;--color:#82af77"></view>
            <view style="--i:2;--color:#39b3d8"></view>
            <view style="--i:3;--color:#416937"></view>
            <view style="--i:4;--color:#84d488"></view>
        </view>
    </view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Taro from '@tarojs/taro'
onMounted(() => {
    setTimeout(() => Taro.reLaunch({ url: '/pages/tabs/tabBar' }), 3000)
})
</script>

<style module>
.loading-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(240, 255, 252);
}

.loader7 {
    margin-top: 50%;
    transform: scale(0.7);
    width: 600rpx;
    position: relative;
}

.loader7 view {
    position: absolute;
    width: 80rpx;
    height: 80rpx;
    background-color: var(--color);
    left: calc((var(--i) - 1) * 173rpx);
    /* 父元素宽600rpx 4*80+3x=600 x=93  即 80+73 */
    border-radius: 20rpx;
    animation: animate 1s linear infinite;
    display: flex;
    justify-content: center;
    align-items: center;
}

@keyframes animate {
    0% {
        transform: rotate(-45deg);
    }

    100% {
        transform: rotate(45deg);
    }
}

.loader7 view::after {
    position: absolute;
    content: '';
    width: 80rpx;
    height: 80rpx;
    background-color: var(--color);
    top: -120rpx;
    border-radius: 20rpx;
    animation: animate_show 4s steps(1, end) infinite;
    animation-delay: calc((5 - var(--i)) * -1s);
}

@keyframes animate_show {

    0% {
        opacity: 1;
    }

    25%,
    50%,
    75%,
    100% {
        opacity: 0;
    }
}

.loader7 view::before {
    position: absolute;
    content: '';
    width: 40rpx;
    height: 40rpx;
    border-radius: 50%;
    background-color: #fff;
}
</style>