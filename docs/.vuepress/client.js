import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/MyLayout2.vue'

//自定义布局
export default defineClientConfig({
  layouts: {
    Layout,
  },
})
