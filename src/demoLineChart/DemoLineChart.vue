<template>
  <div class="com-demo-line-chart">
    <!-- <TestComponent /> -->
    <Echarts :option="option"></Echarts>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onUnmounted,
  PropType,
  watch,
  computed
} from 'vue'
import {IChartDefinition, Util, ChartData, IFieldInfo} from '@datahu/core'
import {ChartUtil, ITooltip, Echarts} from '@datahu/component-base'
import TestComponent from './TestComponent.vue'
export default defineComponent({
  name: 'DemoLineChart',
  components: {TestComponent, Echarts},
  props: {
    chart: Object as PropType<IChartDefinition>,
    pkg: Object,
    data: Object as PropType<ChartData>,
    optionAfterTheme: Object
  },
  setup(props, {emit}) {
    onMounted(() => {
      emit('mounted')
    })
    onUnmounted(() => {
      emit('unmounted')
    })
    let option = computed(() => {
      try {
        let chartData: ChartData = props.data!
        if (!chartData.isReady()) {
          return null
        }
        let dataset = chartData.getDataset()
        let series: Array<any> = []

        for (let dataIndex of dataset.map['series']) {
          let seriesOpt = {
            type: 'line',
            name: dataset.data[0][dataIndex]
          }
          series.push(seriesOpt)
        }

        let opt = {
          title: {
            text: ''
          },
          dataset: {
            source: dataset.data
          },
          xAxis: {type: 'category'},
          yAxis: {},
          series: series
        }
        console.log('opt', opt)
        return opt
      } catch (e) {
        console.error(e)
        return null
      }
    })

    return {option}
  }
})
</script>

<style>
.com-demo-line-chart {
  text-align: center;
  border: 2px solid blue;
}
</style>
