/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
//添加声明(目的是使ts能识别出mockjs)
declare module 'mockjs'
declare module 'vue-wechat-title'

