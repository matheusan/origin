import styled from 'styled-components';

export const Wrapper: JSX.Element = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;

  margin-top: 24px;
  margin-bottom: 32px;

  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.blueGray50};
`;

export const Single: JSX.Element = styled.div`
  padding: 16px 28px;

  @media only screen and (max-width: 360px) {
    padding: 12px 32px;
  }
`;

export const Top: JSX.Element = styled.div`
  padding: 24px 32px;

  @media only screen and (max-width: 360px) {
    padding: 24px 27px;
  }
`;
export const Bottom: JSX.Element = styled.div`
  padding: 24px 32px;

  background-color: ${props => props.theme.colors.blueGray10};

  line-height: 16px;
  font-weight: 400;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.blueGray900};
`;
