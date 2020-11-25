import styled from 'styled-components';

export const SingleTitle: JSX.Element = styled.h1`
  width: 100%;
  margin: ${props => (props.noMargin ? '0' : '48px 0 24px 0')};
  padding: 0;

  text-align: center;
  font-weight: 400;
  font-size: ${props => (props.size ? `${props.size}px` : '2em')};
  font-family: ${props => props.theme.fonts.primary};
  color: ${props =>
    props.hard
      ? props.theme.colors.blueGray900
      : props.theme.colors.brandColorPrimary};

  @media only screen and (max-width: 380px) {
    margin: 32px 0 24px 0;
    font-size: 18px;
  }
`;

export const IconWrapper: JSX.Element = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  align-content: stretch;
  margin-bottom: 28px;
`;

export const IconTitle: JSX.Element = styled.h1`
  width: 100%;
  margin: 0 0 0 16px;
  padding: 0;

  line-height: 29px;
  font-size: 24px;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.secondary};
  color: ${props => props.theme.colors.blueGray900};
`;

export const IconDescription: JSX.Element = styled.h2`
  width: 100%;
  margin: 0 0 0 16px;
  padding: 0;

  line-height: 24px;
  font-size: 16px;
  font-weight: 400;
  font-family: ${props => props.theme.fonts.primary};
  color: ${props => props.theme.colors.blueGray400};
`;
