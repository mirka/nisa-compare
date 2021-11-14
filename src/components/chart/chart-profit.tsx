import { defaults, Line } from "react-chartjs-2";

import * as config from "./config";
import * as COLORS from "../../colors";

defaults.color = config.defaults.color;
// @ts-ignore
defaults.font.family = "Roboto Mono";

const dataProps = (data, color) => ({
  borderColor: `hsl(${color})`,
  borderWidth: 2,
  backgroundColor: `hsla(${color}, 30%)`,
  pointBackgroundColor: `hsl(${color})`,
  pointRadius: 2,
  data: data.map((item) => Math.round(item.profit)),
});

export default function ChartProfit({ data }) {
  const chartData = {
    labels: data.ippan.map((item) => item.id),
    datasets: [
      {
        label: "つみたてNISA",
        ...dataProps(data.tsumi, COLORS.tsumi.hsl),
      },
      {
        label: "NISA",
        ...dataProps(data.ippan, COLORS.ippan.hsl),
      },
    ],
  };

  return (
    <Line data={chartData} options={config.options({ title: "評価益" })} />
  );
}
