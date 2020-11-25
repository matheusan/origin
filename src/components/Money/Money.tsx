import * as React from 'react';

import * as S from './styled';
import { formatMoney } from '../../utils/formatMoney';
import { THOUSAND_SEPARATOR, DECIMAL_SEPARATOR } from '../../constants';
import { TextAlign } from '../../types';

export interface MoneyProps {
  amount: number;
  round?: boolean;
  fontSize?: number;
  textAlign?: TextAlign;
}

const Moeny: React.SFC<MoneyProps> = ({
  amount = 0,
  round = false,
  textAlign = TextAlign.right,
  fontSize
}): JSX.Element => {
  return (
    <S.Money fontSize={fontSize} textAlign={textAlign}>
      ${formatMoney(amount, THOUSAND_SEPARATOR, DECIMAL_SEPARATOR, round)}
    </S.Money>
  );
};

export default Moeny;
