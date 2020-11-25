import * as React from 'react';

import * as S from './styled';

export interface GridProps {
  nowrap?: boolean;
  columns?: numbers;
}

const Grid: React.SFC<GridProps> = ({
  nowrap = false,
  columns = null,
  children
}) => (
  <S.Wrapper nowrap={nowrap}>
    {[].concat(children).map((child, i) => (
      <S.Column key={i} columns={columns}>
        {child}
      </S.Column>
    ))}
  </S.Wrapper>
);

export default Grid;
