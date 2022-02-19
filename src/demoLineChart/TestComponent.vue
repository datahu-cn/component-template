<template>
  <div class="com-test">
    <h2>testcomponent</h2>
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
  computed,
  defineAsyncComponent
} from 'vue'
import {IChartDefinition, Util, ChartData, IFieldInfo} from '@datahu/core'
import {ChartUtil, ITooltip} from '@datahu/component-base'
export default defineComponent({
  name: 'TestComponent',
  setup(props, {emit}) {
    onMounted(() => {
      emit('mounted')
    })
    onUnmounted(() => {
      emit('unmounted')
    })

    return {}
  }
})
</script>

<style>
.com-test {
  text-align: center;
}
</style>
