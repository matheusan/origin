import * as React from 'react';
import { format } from 'date-fns';

import * as S from './styled';

import Segment from '../Segment';
import Header from '../Header';
import MoneyInput from '../MoneyInput';
import DatePicker from '../DatePicker';
import Grid from '../Grid';
import Label from '../Label';
import Card from '../Card';
import Money from '../Money';
import Button from '../Button';

import {
  useSavings,
  setAmount,
  addMonth,
  subtractMonth,
  save,
  saved,
  selectors
} from '../../redux';
import { formatMoney } from '../../utils/formatMoney';
import { DATE_FORMAT } from '../../constants';

const Savings: React.FunctionComponent = (): JSX.Element => {
  const [state, dispatch] = useSavings();
  const { totalAmount, targetDate, loading } = state;

  const setTotalAmount = (e, newValue) => {
    const { value } = newValue;
    dispatch(setAmount(value));
  };
  const savePlan = () => {
    dispatch(save());
    setTimeout(() => dispatch(saved()), 1000);
  };
  const upMonth = () => dispatch(addMonth());
  const downMonth = () => dispatch(subtractMonth());
  const totalMonths = selectors.getMonths(state);
  const monthlyAmounts = selectors.getMonthlyAmounts(state);

  return (
    <S.Container>
      <Header>
        Let&apos;s plan your <strong>saving goal.</strong>
      </Header>
      <Segment border>
        <Header icon="house">
          <Header.Title>Buy a house</Header.Title>
          <Header.Description>SavingGoal</Header.Description>
        </Header>
        <Grid>
          <Label text="Total amount">
            <MoneyInput value={totalAmount} onChange={setTotalAmount} />
          </Label>
          <Label text="Reach goal by">
            <DatePicker
              date={targetDate}
              onClickNext={upMonth}
              onClickPrev={downMonth}
            />
          </Label>
        </Grid>
        <Card>
          <Card.Top>
            <Grid nowrap>
              <Label size={20} smallsize={18} margin={false}>
                Monthly amount
              </Label>
              <Money amount={monthlyAmounts} round />
            </Grid>
          </Card.Top>
          <Card.Bottom>
            You’re planning <strong>{totalMonths} monthly deposits</strong> to
            reach your <strong>${formatMoney(totalAmount)}</strong> goal by{' '}
            <strong>{format(targetDate, DATE_FORMAT)}.</strong>
          </Card.Bottom>
        </Card>
        <Button onClick={savePlan} loading={loading}>
          Confirm
        </Button>
      </Segment>
    </S.Container>
  );
};

export default Savings;
