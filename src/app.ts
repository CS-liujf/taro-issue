import { createApp } from 'vue'
import setupRouter from './router'
import setupStore from './store'
import { useLayoutStore } from './store/store_modules/layoutInfo'
import './app.scss'

const App = createApp({
  onShow(options) { },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
setupRouter(App)
setupStore(App)
const layoutStore = useLayoutStore()
layoutStore.setLayoutInfo()
export default App
