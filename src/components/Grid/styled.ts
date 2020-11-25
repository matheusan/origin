import styled from 'styled-components';

const columnSizes = {
  1: '100%',
  2: '48%',
  3: '32%',
  4: '23.7%',
  5: '18.7%'
};

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
  ${props =>
    props.columns
      ? `width: ${columnSizes[props.columns]};`
      : 'flex: 1 1 200px;'}

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 380px) {
    flex: auto;
    margin-right: 0;
    margin-bottom: 16px;
    width: 100%;
  }
`;
