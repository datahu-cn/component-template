import {DemoLineChartComponent} from './demoLineChart'
import {IComponent, IComponentPlugin} from '@datahu/core'

export let plugin: IComponentPlugin = {
  name: 'demo-line-plugin', // 插件名称，插件名称不能和其他插件名称相同
  description: 'demo line plugin description',
  version: '1.0.0',
  // 属性值为组件名称，一个插件下可定义多个组件，组件名称不能和标准组件名称相同
  components: {DemoLineChartComponent}
}
