import { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'
// import CusLayout from './theme-default/Layout.vue'
import BlogLayout from '../../components/BlogLayout/index.vue'

export default {
  extends: DefaultTheme,
  // Layout: CusLayout,
  enhanceApp(ctx) {
    ctx.app.component('blog', BlogLayout)
  }
} satisfies Theme
