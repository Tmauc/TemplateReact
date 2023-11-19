import { createGlobalStyle } from 'styled-components';
import Aclonica from '../fonts/Aclonica-Regular.ttf';
import Roboto from '../fonts/Roboto-Regular.ttf';

export const GlobalFonts = createGlobalStyle`
@font-face {
  font-family: "Aclonica";
  src: url(${Aclonica}) format("opentype");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Roboto";
  src: url(${Roboto}) format("opentype");
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}
`;