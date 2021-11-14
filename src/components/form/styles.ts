/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import * as COLORS from "../../colors";

const FLEX_GAP = 16;
const BP_MOBILE = 550;

export const form = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: -${FLEX_GAP}px;
  max-width: 480px;
  background: ${COLORS.secondary.hex};
  border-radius: 4px;
  text-align: left;

  @media (min-width: ${BP_MOBILE}px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const column = css`
  margin: ${FLEX_GAP}px;
`;

export const mainColumn = css`
  @media (min-width: 375px) {
    display: flex;
  }
`;

export const inputWithUnit = css`
  display: flex;
  align-items: center;

  @media (min-width: ${BP_MOBILE}px) {
    justify-content: flex-start;
  }
`;

export const label = css`
  display: block;
  font-size: ${14 / 16}rem;
  margin-bottom: 4px;
`;

export const input = css`
  margin-right: 4px;
  padding: 4px 8px;
  width: 6ch;
  border: 1px solid ${COLORS.primary.hex}90;
  border-radius: 4px;
  font-family: inherit;
  font-size: ${20 / 16}rem;
  line-height: 1;
`;

export const checkbox = css`
  display: flex;
  align-items: center;
  font-size: ${12 / 16}rem;
  margin-top: 8px;

  input[type="checkbox"] {
    margin: 0 4px 0 0;
  }
`;

export const buttonsColumn = css`
  ${column}

  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
`;

const button = css`
  appearance: none;
  background: transparent;
  border: none;
  border-radius: 50px;
  font-size: inherit;
  font-weight: normal;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.4s ease-out;

  &:hover {
    opacity: 0.92;
  }
`;

export const btnSubmit = css`
  ${button};

  padding: 14px 1.75em;
  background: linear-gradient(
    200deg,
    hsla(${COLORS.tsumi.hsl}, 65%) 0%,
    hsl(${COLORS.tsumi.hsl}) 20%,
    hsl(${COLORS.ippan.hsl}) 86%
  );
  color: #fff;
`;

export const btnReset = css`
  ${button};

  margin-top: 8px;
  padding: 10px;
  background: hsl(0, 0%, 84%);
  font-size: ${14 / 16}rem;
`;
