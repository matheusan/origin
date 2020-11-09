import * as React from 'react';

import * as S from './styled';
import { formatMoney } from '../../utils/formatMoney';
import { THOUSAND_SEPARATOR, DECIMAL_SEPARATOR } from '../../constants';

export interface MoneyProps {
  amount: number;
  round?: boolean;
}

const Moeny: React.SFC<MoneyProps> = ({
  amount = 0,
  round = false
}): JSX.Element => {
  return (
    <S.Money>
      ${formatMoney(amount, THOUSAND_SEPARATOR, DECIMAL_SEPARATOR, round)}
    </S.Money>
  );
};

export default Moeny;
