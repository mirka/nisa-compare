/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

import { MAX_CONTENT_WIDTH } from "../variables";

const wrapper = css`
  margin: 28px calc(var(--content-padding) * -1) 0;
  padding: 28px 16px;
  background: hsl(0, 0%, 18%);

  @media (min-width: 500px) {
    margin: 60px auto 0;
    padding: 32px;
    max-width: ${MAX_CONTENT_WIDTH}px;
    border-radius: 8px;
  }
`;

const inner = css`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 28px;
  max-width: 900px;
  margin: 0 auto;
  color: white;

  @media (min-width: 800px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr;
  }
`;

export default function TableGroup({ children }) {
  return (
    <div css={wrapper}>
      <div css={inner} children={children} />
    </div>
  );
}
