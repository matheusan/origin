import * as React from 'react';

import * as S from './styled';

export interface BarProps {
  children: React.ReactNode;
}

const Bar: React.SFC = ({ children }): JSX.Element => <S.Bar>{children}</S.Bar>;

export default Bar;
