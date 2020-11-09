import * as React from 'react';

import * as S from './styled';

export interface LabelProps {
  text: string;
  size?: number;
  smallsize?: number;
  margin?: boolean;
}

const Label: React.SFC<LabelProps> = ({
  text,
  size = 14,
  smallsize = null,
  margin = true,
  children
}) => (
  <S.Wrapper>
    {text && (
      <S.Label size={size} smallsize={smallsize} margin={margin}>
        {text}
      </S.Label>
    )}
    {!text ? (
      <S.Label size={size} smallsize={smallsize} margin={margin}>
        {children}
      </S.Label>
    ) : (
      children
    )}
  </S.Wrapper>
);

export default Label;
