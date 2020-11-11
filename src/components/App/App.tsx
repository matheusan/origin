import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { originDefaultTheme } from '../../theme/originDefaultTheme';
import * as S from './styled';

import Bar from '../Bar';
import Icon from '../Icon';
import Savings from '../Savings';
import SavingsProvider from '../../redux';

const App: React.SFC = (): JSX.Element => (
  <ThemeProvider theme={originDefaultTheme}>
    <SavingsProvider>
      <S.GlobalStyle />
      <Bar>
        <Icon name="logo" height="32px" />
      </Bar>
      <Savings />
    </SavingsProvider>
  </ThemeProvider>
);

export default App;
