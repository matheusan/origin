import styled from 'styled-components';

export const Money: JSX.Element = styled.div`
  color: ${props => props.theme.colors.brandColorSecondary}
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 32px;
  font-weight: 500;
  text-align: right;

  @media only screen and (max-width: 360px) {
    font-size: 24px;
  }
`;
