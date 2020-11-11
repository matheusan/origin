import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow, mount, ShallowWrapper } from 'enzyme';

import SavingsProvider from '../src/redux';

const ThemeProviderWrapper = theme => ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const StateProviderWrapper = initialState => ({ children }) => (
  <SavingsProvider state={initialState}>{children}</SavingsProvider>
);

const ThemeStateProviderWrapper = (theme, state) => ({ children }) => (
  <ThemeProvider theme={theme}>
    <SavingsProvider state={state}>{children}</SavingsProvider>
  </ThemeProvider>
);

export const shallowWithTheme = (tree, theme): ShallowWrapper =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper(theme)
  });

export const mountWithTheme = (tree, theme) =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper(theme)
  });

export const mountWithState = (tree, theme) =>
  mount(tree, {
    wrappingComponent: StateProviderWrapper(theme)
  });

export const mountWithProviders = (state, theme) => tree =>
  mount(tree, {
    wrappingComponent: ThemeStateProviderWrapper(state, theme)
  });
