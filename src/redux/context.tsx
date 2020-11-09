import * as React from 'react';
import { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from './reducer';

export const SavingsContext = createContext();

export const SavingsProvider = ({ children }) => {
  const store = useReducer(reducer, initialState);
  return (
    <SavingsContext.Provider value={store}>{children}</SavingsContext.Provider>
  );
};

export const useSavings = () => {
  const contextValue = useContext(SavingsContext);
  return contextValue;
};
