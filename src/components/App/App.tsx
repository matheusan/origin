import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { originDefaultTheme } from '../../theme/originDefaultTheme';
import * as S from './styled';

import Bar from '../Bar';
import Icon from '../Icon';
import SavingsProvider from '../../redux';
import Goals from '../Goals';

const App: React.SFC = (): JSX.Element => (
  <ThemeProvider theme={originDefaultTheme}>
    <SavingsProvider>
      <S.GlobalStyle />
      <Bar>
        <Icon name="logo" height="32px" />
      </Bar>
      <Goals />
    </SavingsProvider>
  </ThemeProvider>
);

export default App;
