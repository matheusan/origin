import styled from 'styled-components';

export const Money: JSX.Element = styled.div`
  color: ${props => props.theme.colors.brandColorSecondary}
  font-family: ${props => props.theme.fonts.secondary};
  font-size: ${props => (props.fontSize ? `${props.fontSize}` : '32px')};
  font-weight: 500;
  text-align: ${props => props.textAlign};

  @media only screen and (max-width: 380px) {
    font-size: 24px;
  }
`;
