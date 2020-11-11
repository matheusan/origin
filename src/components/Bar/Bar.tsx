import * as React from 'react';

import * as S from './styled';

export interface BarProps {
  children: React.ReactNode;
}

const Bar: React.SFC = ({ children }) => <S.Bar>{children}</S.Bar>;

export default Bar;
