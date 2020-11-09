import styled from 'styled-components';

export const Button: JSX.Element = styled.button`
  display: block;
  width: 320px;
  height: 56px;
  margin: 0 auto;
  border-radius: 32px;
  border: 0;
  outline: 0;
  cursor: pointer;

  background-color: ${props => props.theme.colors.brandColorPrimary};
  color: ${props => props.theme.colors.neutralWhite};
  font-family: ${props => props.theme.fonts.primary};
  font-size: 16px;
  line-height: 54px;
  text-align: center;

  &:hover {
    background-color: ${props => props.theme.colors.brandColorSecondary};
  }
`;
