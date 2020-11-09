import styled from 'styled-components';

const Bar: JSX.Element = styled.div`
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;

  padding: 24px 56px;
  background-color: ${props => props.theme.colors.neutralWhite};
  align-items: center;

  @media only screen and (max-width: 360px) {
    height: 56px;
  }
`;

export { Bar };