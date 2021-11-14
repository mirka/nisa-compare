import type { LegendOptions} from 'chart.js'
import * as COLORS from '../../colors';

export const defaults = {
  color: COLORS.primary.hex,
};

const legendAlignment: LegendOptions<"line">["align"] = 'end';  

export const options = ({ title, legendFilter = (legend) => legend }) => ({
  aspectRatio: 1.2,
  plugins: {
    legend: {
      align: legendAlignment,
      labels: {
        boxWidth: 16,
        padding: 12,
        filter: legendFilter,
        sort: (a, b) => a.text.localeCompare(b.text),
      },
    },
  },
  scales: {
    y: {
      title: {
        display: true,
        text: "万円",
      },
      ticks: {
        callback: (val) => val / 10000,
      },
    },
    x: {
      title: {
        display: true,
        text: "年目",
      },
    },
  },
});
