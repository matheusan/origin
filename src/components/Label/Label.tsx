import * as React from 'react';

import * as S from './styled';
import { TextAlign } from '../../types';

export interface LabelProps {
  text: string;
  size?: number;
  smallsize?: number;
  margin?: boolean;
  textAlign?: TextAlign;
}

const Label: React.SFC<LabelProps> = ({
  text,
  size = 14,
  smallsize = null,
  margin = true,
  textAlign = TextAlign.left,
  children
}) => (
  <S.Wrapper>
    {text && (
      <S.Label
        size={size}
        smallsize={smallsize}
        margin={margin}
        textAlign={textAlign}
      >
        {text}
      </S.Label>
    )}
    {!text ? (
      <S.Label
        size={size}
        smallsize={smallsize}
        margin={margin}
        textAlign={textAlign}
      >
        {children}
      </S.Label>
    ) : (
      children
    )}
  </S.Wrapper>
);

export default Label;
