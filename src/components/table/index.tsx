/** @jsxImportSource @emotion/react */

import type { NISAData } from '../../hooks/use-nisa-data';
import * as styles from './styles';

type Props = {
  data: NISAData[];
  title: string;
  slug: 'ippan' | 'tsumi';
};

const jpy = new Intl.NumberFormat('ja-JP', { maximumFractionDigits: 0 });

export default function Table({ data, slug, title }: Props) {
  return (
    <table css={styles.table}>
      <caption css={styles.caption}>{title}</caption>

      <thead css={styles.thead(slug)}>
        <tr>
          <th>年目</th>
          <th>累積買付額</th>
          <th>評価額</th>
          <th css={styles.optionalColumn}>ROI</th>
          <th>評価益</th>
        </tr>
      </thead>

      <tbody css={styles.tbody(slug)}>
        {data.map((item) => (
          <tr key={item.id}>
            <th scope="row">{item.id}</th>
            <td>{jpy.format(item.investedAmount)}</td>
            <td>{jpy.format(item.valuation)}</td>
            <td css={styles.optionalColumn}>{jpy.format(item.roi)}</td>
            <td css={styles.tdHighlight(slug)}>{jpy.format(item.profit)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
