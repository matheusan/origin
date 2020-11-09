import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { originDefaultTheme } from '../../theme/originDefaultTheme';
import * as S from './styled.ts';

import Segment from '../Segment';
import Bar from '../Bar';
import Icon from '../Icon';
import Header from '../Header';
import MoneyInput from '../MoneyInput';
import DatePicker from '../DatePicker';
import Grid from '../Grid';
import Label from '../Label';
import Card from '../Card';
import Money from '../Money';
import Button from '../Button';

const App: React.SFC = (): JSX.Element => (
  <ThemeProvider theme={originDefaultTheme}>
    <S.GlobalStyle />
    <Bar>
      <Icon name="logo" height="32px" title="Use Origin" alt="Use Origin" />
    </Bar>
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
            <MoneyInput value={25000} />
          </Label>
          <Label text="Reach goal by">
            <DatePicker />
          </Label>
        </Grid>
        <Card>
          <Card.Top>
            <Grid nowrap>
              <Label size={20} smallsize={18} margin={false}>
                Monthly amount
              </Label>
              <Money amount={824} round />
            </Grid>
          </Card.Top>
          <Card.Bottom>
            You’re planning <strong>48 monthly deposits</strong> to reach your{' '}
            <strong>$25,000</strong> goal by <strong>October 2020.</strong>
          </Card.Bottom>
        </Card>
        <Button>Confirm</Button>
      </Segment>
    </S.Container>
  </ThemeProvider>
);

export default App;
