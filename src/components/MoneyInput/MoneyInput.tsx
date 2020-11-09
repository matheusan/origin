import * as React from 'react';
import { useState } from 'react';

import * as S from './styled';
import Icon from '../Icon';
import { formatMoney, parseMoney } from '../../utils/formatMoney';
import { THOUSAND_SEPARATOR, DECIMAL_SEPARATOR } from '../../constants';

export interface MoneyInputProps {
  value: number | null;
  thousandSeparator?: string;
  decimal?: string;
  onChange?: () => null;
}

const MoneyInput: React.FunctionComponent<MoneyInputProps> = ({
  value = null,
  thousandSeparator = THOUSAND_SEPARATOR,
  decimalSeparator = DECIMAL_SEPARATOR,
  onChange
}): JSX.Element => {
  const [inputValue, setInputValue] = useState(Number(value) || null);

  const internalOnChange = (e): void => {
    e.persist();
    const { name, value } = e.currentTarget;
    const numberValue = parseMoney(value);
    setInputValue(numberValue);

    if (onChange && typeof onChange === 'function') {
      onChange(e, { name, value: numberValue });
    }
  };

  const maskedValue = formatMoney(
    inputValue,
    thousandSeparator,
    decimalSeparator
  );
  return (
    <S.Wrapper>
      <Icon name="dollar" />
      <S.Input value={maskedValue} onChange={internalOnChange} />
    </S.Wrapper>
  );
};

export default MoneyInput;
