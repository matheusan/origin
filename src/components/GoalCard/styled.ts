import styled from 'styled-components';

export const Wrapper: JSX.Element = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;

  width: 260px;
  height: 250px;

  padding: 24px;
  margin-bottom: 2em;

  background: ${props => props.theme.colors.neutralWhite};

  border-radius: 8px;
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.38);

  @media only screen and (max-width: 380px) {
    margin: 0 auto;
    border-radius: 4px;
    padding: 24px;
  }
`;
