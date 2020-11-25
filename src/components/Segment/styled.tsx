import styled from 'styled-components';

export const Segment: JSX.Element = styled.section`
  max-width: 480px;
  margin: 0 auto 50px auto;
  padding: 40px;

  background: ${props => props.theme.colors.neutralWhite};

  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.38);

  @media only screen and (max-width: 380px) {
    border-radius: 4px;
    padding: 24px;
  }
`;
