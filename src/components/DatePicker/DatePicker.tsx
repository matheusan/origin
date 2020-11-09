import * as React from 'react';

import * as S from './styled';
import Icon from '../Icon';

export interface DatePickerProps {
  date?: Date;
  onChange?: () => null;
}

const DatePicker: React.SFC<DatePickerProps> = () => (
  <S.Wrapper>
    <S.Button>
      <Icon name="arrow" />
    </S.Button>
    <S.MonthYear>
      <strong>October</strong>
      2021
    </S.MonthYear>
    <S.Button direction="right">
      <Icon name="arrow" />
    </S.Button>
  </S.Wrapper>
);

export default DatePicker;
