/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { Global } from '@emotion/react';

import ChartGroup from '../chart-group';
import ChartProfit from '../chart/chart-profit';
import ChartValuation from '../chart/chart-valuation';
import Form from '../form';
import Table from '../table';
import TableGroup from '../table-group';
import { useNISAData } from '../../hooks/use-nisa-data';
import * as styles from './styles';

export default function App() {
  const [annualInvestment, setAnnualInvestment] = useState(1_200_000);
  const [roi, setROI] = useState(0.05);
  const [isNewNISA, setIsNewNISA] = useState(false);

  const data = {
    ippan: useNISAData({
      annualInvestment,
      annualROI: roi,
      maxInvestment: (isNewNISA ? 122 : 120) * 5 * 10000,
    }),
    tsumi: useNISAData({
      annualInvestment: 400_000,
      annualROI: roi,
      maxInvestment: 8_000_000,
    }),
  };

  return (
    <div css={styles.app}>
      <Global styles={styles.global} />
      <header css={styles.header}>
        <h1 css={styles.h1}>
          NISA <span css={styles.slash} aria-label="VS" /> つみたてNISA
          <br />
          比較計算
        </h1>
        <Form
          setAnnualInvestment={setAnnualInvestment}
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
