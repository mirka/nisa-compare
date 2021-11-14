/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import * as COLORS from '../../colors';

export const table = css`
  border-collapse: collapse;
  text-align: right;
  font-size: ${11 / 16}rem;

  @media (min-width: 375px) {
    font-size: ${13 / 16}rem;
  }

  th,
  td {
    padding: 3px 8px;
  }
`;

export const caption = css`
  font-size: ${18 / 16}rem;
  line-height: 1.4;
  margin-bottom: 0.5em;
  text-align: left;

  @media (min-width: 375px) {
    font-size: ${20 / 16}rem;
  }
`;

export const thead = (slug) => css`
  background: hsl(${COLORS[slug].hsl});
  color: #fff;
  font-weight: normal;
`;

export const tbody = (slug) => css`
  font-family: 'Roboto Mono', monospace;

  th {
    border-right: 1px solid hsla(0, 0%, 100%, 40%);
    font-weight: normal;
    text-align: center;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid hsla(0, 0%, 100%, 20%);
  }

  tr:last-child td:last-child {
    border: 2px solid hsl(${COLORS[slug].hsl});
  }
`;

export const optionalColumn = css`
  display: none;

  @media (min-width: 1000px) {
    display: initial;
  }
`;

export const tdHighlight = (slug) => css`
  background: hsla(${COLORS[slug].hsl}, 40%);
`;
