
import { Bar, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'], 
   props: {
    chartData: {
      type: Object,
      required: true,
      default: () => {}
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData,{responsive: true})
  }
}