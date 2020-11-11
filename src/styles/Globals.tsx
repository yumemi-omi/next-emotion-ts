import { css, Global } from '@emotion/core';

export const GlobalStyles = (): JSX.Element => (
  <Global
    styles={css`
      html,
      body {
        padding: 3rem 1rem;
        margin: 0;
        background: papayawhip;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 16px;
      }
    `}
  />
);
