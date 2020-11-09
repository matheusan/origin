import * as React from 'react';

import * as S from './styled';

export interface GridProps {
  nowrap?: boolean;
}

const Grid: React.SFC<GridProps> = ({ nowrap = false, children }) => (
  <S.Wrapper nowrap={nowrap}>
    {[].concat(children).map((child, i) => (
      <S.Column key={i}>{child}</S.Column>
    ))}
  </S.Wrapper>
);

export default Grid;
