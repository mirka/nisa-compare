/** @jsxImportSource @emotion/react */
import { useState } from "react";

import ChartGroup from "../chart-group";
import ChartProfit from "../chart/chart-profit";
import ChartValuation from "../chart/chart-valuation";
import Form from "../form";
import Table from "../table";
import TableGroup from "../table-group";
import { useNISAData } from "../../hooks/use-nisa-data";
import * as styles from "./styles";

export default function App() {
  const [annualDeposit, setAnnualDeposit] = useState(1_200_000);
  const [roi, setROI] = useState(0.05);
  const [isNewNISA, setIsNewNISA] = useState(false);

  const data = {
    ippan: useNISAData({
      annualDeposit,
      annualDepositMax: isNewNISA ? 1_220_000 : 1_200_000,
      annualROI: roi,
      depositableYears: 5,
    }),
    tsumi: useNISAData({
      annualDeposit: 400_000,
      annualDepositMax: 400_000,
      annualROI: roi,
      depositableYears: 20,
    }),
  };

  return (
    <div css={styles.app}>
      <header css={styles.header}>
        <h1 css={styles.h1}>
          NISA <span css={styles.slash} aria-label="VS" /> つみたてNISA
          <br />
          比較計算
        </h1>
        <Form
          setAnnualDeposit={setAnnualDeposit}
          setIsNewNISA={setIsNewNISA}
          setROI={setROI}
        />
      </header>
      <ChartGroup>
        <section>
          <h2>評価額・買付額</h2>
          <ChartValuation data={data} />
        </section>
        <section>
          <h2>評価益</h2>
          <ChartProfit data={data} />
        </section>
      </ChartGroup>
      <TableGroup>
        <Table data={data.ippan} title="NISA" slug="ippan" />
        <Table data={data.tsumi} title="つみたてNISA" slug="tsumi" />
      </TableGroup>
    </div>
  );
}
