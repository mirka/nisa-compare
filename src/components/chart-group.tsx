/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { MAX_CONTENT_WIDTH } from '../variables';

const MARGIN = 20;

const styles = css`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: ${MARGIN}px;
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;

  @media (min-width: 700px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
  }

  canvas {
    max-width: 100%;
    max-height: 420px;
  }

  h2 {
    margin: 0 0 8px;
    font-size: ${16 / 16}rem;
  }
`;

export default function ChartGroup(props) {
  return <div css={styles} {...props} />;
}
