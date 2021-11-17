/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import * as COLORS from "../../colors";
import { MAX_CONTENT_WIDTH } from "../../variables";

export const app = css`
  --content-padding: 16px;

  padding: 0 var(--content-padding);

  font-family: "Roboto Mono", Haettenschweiler, "Arial Narrow Bold", sans-serif,
    -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  @media (min-width: 450px) {
    --content-padding: 40px;
  }
`;

export const header = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${MAX_CONTENT_WIDTH}px;
  margin: 36px auto 60px;

  @media (min-width: 850px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 60px;
    margin-bottom: 80px;
  }

  Form {
    flex: 1 0 auto;
  }
`;

export const h1 = css`
  margin: 0 0 32px;
  font-size: ${20 / 16}rem;
  font-weight: 600;
  line-height: 1.4;
  text-align: center;

  @media (min-width: 900px) {
    font-size: ${24 / 16}rem;
  }

  @media (min-width: 1200px) {
    font-size: ${32 / 16}rem;
  }
`;

export const slash = css`
  position: relative;
  top: -0.35em;
  z-index: -1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 -0.15em;
  transform: rotate(20deg);

  &::before {
    content: "";
    position: absolute;
    display: block;
    background: pink;
    background: linear-gradient(
      20deg,
      hsl(${COLORS.ippan.hsl}) 10%,
      hsl(${COLORS.tsumi.hsl}) 100%
    );

    width: 2px;
    height: 1.85em;

    @media (min-width: 900px) {
      width: 3px;
    }
  }
`;
