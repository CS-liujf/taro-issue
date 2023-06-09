import Taro from '@tarojs/taro';
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

interface MenuButtonInfo {
    width: number
    height: number
    rightMargin: number
    topMargin: number
}


export const useLayoutStore = defineStore('layout', () => {
    const navHeight = ref(0);
    const navWidth = ref(0);
    const statusBarHeight = ref(0);
    const navBarHeight = ref(0);
    const navBarWidth = ref(0);
    const menuButtonInfo = reactive<MenuButtonInfo>({ width: 0, height: 0, rightMargin: 0, topMargin: 0 });

    const setLayoutInfo = () => {
        const menuButton = Taro.getMenuButtonBoundingClientRect();
        menuButtonInfo.width = menuButton.width;
        menuButtonInfo.height = menuButton.height;
        Taro.getSystemInfo().then((res) => {
            statusBarHeight.value = res.statusBarHeight!;//计算statusBar高度
            menuButtonInfo.rightMargin = res.windowWidth - menuButton.right;//计算胶囊的右边距
            menuButtonInfo.topMargin = menuButton.top - statusBarHeight.value;//计算胶囊距离statusBar的边距
            navBarHeight.value = menuButton.height + menuButtonInfo.topMargin * 2;//计算navBar高度
            navWidth.value = res.windowWidth;
            navHeight.value = statusBarHeight.value + navBarHeight.value;
            navBarWidth.value = navWidth.value - menuButtonInfo.width - menuButtonInfo.rightMargin;//计算navBar的宽度
        })
    }

    return { navWidth, navHeight, navBarWidth, navBarHeight, statusBarHeight, menuButtonInfo, setLayoutInfo }
})