import { css }        from 'styled-components';

import ExtraLight     from './BetmExtralight.woff2';
import Light          from './BetmLight.woff2';
import Book           from './BetmBook.woff2';
import Medium         from './BetmMedium.woff2';
import Bold           from './BetmBold.woff2';


const FontsDeclaration = css`
  @font-face {
    font-family: 'Betm Extralight';
    font-weight: 300;
    src: url(${ExtraLight}) format('woff2');
  };

  @font-face {
    font-family: 'Betm Light';
    font-weight: 300;
    src: url(${Light}) format('woff2');
  };

  @font-face {
    font-family: 'Betm Book';
    font-weight: 400;
    src: url(${Book}) format('woff2');
  };

  @font-face {
    font-family: 'Betm Medium';
    font-weight: 500;
    src: url(${Medium}) format('woff2');
  };

  @font-face {
    font-family: 'Betm Bold';
    font-weight: 600;
    src: url(${Bold}) format('woff2');
  };
`;

export { FontsDeclaration };
