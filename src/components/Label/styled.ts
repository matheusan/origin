import styled from 'styled-components';

export const Wrapper: JSX.Element = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
`;

export const Label: JSX.Element = styled.label`
  font-size: ${props => props.size}px;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.blueGray900};
  margin-bottom: ${props => (!props.margin ? '0' : '8px')};

  @media only screen and (max-width: 360px) {
    font-size: ${props => props.smallsize || '12'}px;
  }
`;
