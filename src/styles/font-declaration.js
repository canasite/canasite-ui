import { css }        from 'styled-components';

import ExtraLight     from '../assets/fonts/BetmExtralight.woff2';
import Light          from '../assets/fonts/BetmLight.woff2';
import Book           from '../assets/fonts/BetmBook.woff2';
import Medium         from '../assets/fonts/BetmMedium.woff2';
import Bold           from '../assets/fonts/BetmBold.woff2';


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
