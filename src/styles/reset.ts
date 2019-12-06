import { css } from 'styled-components';

// prettier-ignore
export const resetStyles = css`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, hr, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;

    font-family: inherit;
    font-style: inherit;
    font-size: inherit;
    font-weight: inherit;

    border: 0;
    border-radius: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  button,
  input,
  textarea,
  select {
    font-family: inherit;
    font-style: inherit;
    font-size: inherit;
    font-weight: inherit;

    border: 0;

    appearance: none;

    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`;
