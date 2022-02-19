import {IControl, ControlType, ComponentControl, Util} from '@datahu/core'
import {
  BaseComponent,
  BaseComponentOption,
  DataOperationComponentOption
} from '@datahu/component-base'
import DemoLineChart from './DemoLineChart.vue'

export class FieldComponentOption {
  static controls = []

  @ComponentControl({
    type: ControlType.fieldSelect,
    title: '分组',
    multiple: true
  })
  xaxis = []

  @ComponentControl({
    type: ControlType.fieldSelect,
    title: '值',
    multiple: true
  })
  series = []
}

export class DemoLineChartComponentOption extends BaseComponentOption {
  static controls: Array<IControl> = []
  @ComponentControl({
    type: ControlType.subset,
    title: '栏',
    children: FieldComponentOption.controls
  })
  fields: FieldComponentOption = new FieldComponentOption()

  @ComponentControl({
    type: ControlType.subset,
    title: '数据',
    children: DataOperationComponentOption.controls
  })
  dataOperation: DataOperationComponentOption = new DataOperationComponentOption(
    {_supportPartRefresh: true, _supportDrillDown: true, _supportScope: true}
  )
}
export class DemoLineChartComponent extends BaseComponent {
  icon: string =
    '<svg t="1644319266942" class="icon" viewBox="0 0 1066 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2091" width="32" height="32"><path d="M427.349333 689.706667v278.272h167.509334v-364.8l-133.888 115.242666-33.621334-28.714666z m-281.344-99.029334v377.301334h167.552v-375.04l-83.712-71.296-83.84 69.034666z m562.688 377.301334h167.552V360.96l-167.552 144.213333v462.762667z" fill="#4073FF" p-id="2092"></path><path d="M665.216 56.021333l136.277333 133.973334-340.522666 293.12L229.845333 286.293333 32.170667 449.28v130.346667l197.674666-162.986667 231.125334 196.821333 411.349333-353.962666 114.176 112.213333V56.064z" fill="#4073FF" fill-opacity=".396" p-id="2093"></path></svg>'
  constructor(language: string) {
    super(language)
  }
  option: DemoLineChartComponentOption = new DemoLineChartComponentOption()
  getComponent() {
    return DemoLineChart
  }
}
