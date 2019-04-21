import reset from 'react-style-reset/string';
import { FontsDeclaration } from '../fonts/font-declaration';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${reset};
  ${FontsDeclaration};

  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body {
    overflow-x: hidden;
    font-family: 'Betm Book';
  }

  a {
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }

  img {
    vertical-align: middle;
  }
  
  button {
    margin: 0;
    white-space: nowrap;
  }
  
  input[type=text] {
    margin: 0;
  }
  
  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
  
  input[type=number] {
      -moz-appearance:textfield;
  }
`;
