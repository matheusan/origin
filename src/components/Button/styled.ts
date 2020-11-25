import styled from 'styled-components';

export const Button: JSX.Element = styled.button`
  display: block;
  width: ${props => (props.secondary || props.flex ? '100%' : '320px')};
  height: ${props => (props.secondary ? '40px' : '56px')};
  margin: 0 auto;
  border-radius: ${props => (props.secondary ? '8px' : '32px')};
  border: 0;
  outline: 0;
  cursor: pointer;

  background-color: ${props =>
    props.secondary
      ? props.theme.colors.blueGray10
      : props.theme.colors.brandColorPrimary};

  color: ${props =>
    props.secondary
      ? props.theme.colors.brandColorSecondary
      : props.theme.colors.neutralWhite};

  font-family: ${props => props.theme.fonts.primary};
  font-size: 16px;
  line-height: ${props => (props.secondary ? '40px' : '54px')};
  text-align: center;

  &:hover {
    background-color: ${props =>
      props.secondary
        ? props.theme.colors.neutralWhite
        : props.theme.colors.brandColorSecondary};
  }
`;
