import styled from 'styled-components';

export const Wrapper: JSX.Element = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => (props.nowrap ? 'nowrap' : 'wrap')};
  align-items: center;
  align-content: stretch;

  padding: 0;
`;

export const Column: JSX.Element = styled.div`
  margin-right: 16px;
  flex-basis: 0;
  flex-grow: 1;
  flex: 1 1 0px;

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 360px) {
    flex: auto;
    margin-right: 0;
    margin-bottom: 16px;
  }
`;
