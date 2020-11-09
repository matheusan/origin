import styled from 'styled-components';

export const Wrapper: JSX.Element = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;

  max-height: 56px;

  border: 1px solid ${props => props.theme.colors.blueGray50};
  background: ${props => props.theme.colors.neutralWhite};
  padding: 3px 5px;
`;

export const Button: JSX.Element = styled.button`
  margin: 0;
  padding: 3px 10px;
  outline: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  ${props =>
    props.direction && props.direction === 'right'
      ? `> img { transform: rotate(180deg); }`
      : ''}
`;

export const MonthYear: JSX.Element = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;

  margin: 0 10px;
  line-height: 24px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.blueGray900};
`;
