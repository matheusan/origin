export const parseMoney = (value: number): number => {
  // eslint-disable-next-line no-useless-escape
  const clearRegex = new RegExp('[^\\d]+', 'g');
  const moveDecimalRegex = new RegExp('(\\d\\d)$', 'g');
  return parseFloat(
    value.replace(clearRegex, '').replace(moveDecimalRegex, '.$1')
  );
};

const getCents = (n: number): number => {
  const [, cents] = n.toFixed(2).split('.');
  return cents;
};

export const formatMoney = (
  input: number,
  thousandSeparator = ',',
  decimalSeparator = '.',
  round = false
): string => {
  if (!input || input === 0) {
    return !round ? `0${decimalSeparator}00` : '0';
  }

  const stringInput = String(input);
  const cents = getCents(input);
  const [hundredsAndThousands] = stringInput.split('.');
  const formatted = hundredsAndThousands.replace(
    /(\d)(?=(\d\d\d)+(?!\d))/g,
    `$1${thousandSeparator}`
  );
  return round ? String(formatted) : `${formatted}${decimalSeparator}${cents}`;
};
