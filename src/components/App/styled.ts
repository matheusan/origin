import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

    background-color: ${props => props.theme.colors.blueGray10}
  }
`;
