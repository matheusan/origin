import styled from 'styled-components';

export const Wrapper: JSX.Element = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;

  height: 34px;

  border: 1px solid ${props => props.theme.colors.blueGray50};
  background: ${props => props.theme.colors.neutralWhite};
  padding: 10px 12px;
`;

export const Input: JSX.Element = styled.input`
  width: 100%;

  color: ${props => props.theme.colors.blueGray600};
  font-family: ${props => props.theme.fonts.secondary};
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  border: 0;
  background: transparent;
  margin-left: 8px;
  outline: none;
`;
