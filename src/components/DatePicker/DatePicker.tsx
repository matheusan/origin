import * as React from 'react';
import { useEffect, useCallback } from 'react';
import { format } from 'date-fns';

import * as S from './styled';
import Icon from '../Icon';

export interface DatePickerProps {
  date?: Date;
  onClickNext?: () => null;
  onClickPrev?: () => null;
}

const DatePicker: React.SFC<DatePickerProps> = ({
  date = new Date(),
  onClickNext,
  onClickPrev
}) => {
  const handleKeyPress = useCallback(
    event => {
      const { keyCode } = event;
      if (keyCode === 39) {
        onClickNext();
      }
      if (keyCode === 37) {
        onClickPrev();
      }
    },
    [onClickNext, onClickPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <S.Wrapper>
      <S.Button onClick={onClickPrev}>
        <Icon name="arrow" />
      </S.Button>
      <S.MonthYear>
        <strong>{format(date, 'MMMM')}</strong>
        {format(date, 'yyyy')}
      </S.MonthYear>
      <S.Button direction="right" onClick={onClickNext}>
        <Icon name="arrow" />
      </S.Button>
    </S.Wrapper>
  );
};

export default DatePicker;
