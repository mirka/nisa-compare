import { defaults, Line } from "react-chartjs-2";

import * as config from "./config";
import * as COLORS from "../../colors";

defaults.color = config.defaults.color;
// @ts-ignore
defaults.font.family = "Roboto Mono";

const valuationDataProps = (data, color) => ({
  fill: "+2",
  borderColor: `hsl(${color})`,
  borderWidth: 2,
  backgroundColor: `hsla(${color}, 30%)`,
  pointBackgroundColor: `hsl(${color})`,
  pointRadius: 2,
  data: data.map((item) => Math.round(item.valuation)),
});

const investedAmountDataProps = (data, color) => ({
  fill: "origin",
  borderColor: `hsl(${color})`,
  backgroundColor: `hsla(${color}, 60%)`,
  borderDash: [4, 2],
  borderWidth: 1,
  pointRadius: 0,
  data: data.map((item) => item.investedAmount),
});

export default function ChartValuation({ data }) {
  const chartData = {
    labels: data.ippan.map((item) => item.id),
    datasets: [
      {
        label: "つみたてNISA",
        ...valuationDataProps(data.tsumi, COLORS.tsumi.hsl),
      },
      {
        label: `NISA`,
        ...valuationDataProps(data.ippan, COLORS.ippan.hsl),
      },
      {
        label: "つみたてNISA 買付",
        ...investedAmountDataProps(data.tsumi, COLORS.tsumi.hsl),
      },
      {
        label: `NISA 買付`,
        ...investedAmountDataProps(data.ippan, COLORS.ippan.hsl),
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={config.options({
        title: "評価額・買付額",
        legendFilter: (legend) => !/買付/.test(legend.text),
      })}
    />
  );
}
