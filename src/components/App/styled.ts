import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;

    background-color: ${props => props.theme.colors.blueGray10}
  }
`;

const Container = styled.div`
  width: 100%;
`;

export { GlobalStyle, Container };
