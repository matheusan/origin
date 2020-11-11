import * as React from 'react';
import { createContext, useReducer, useContext } from 'react';
import { initialState } from './reducer';
import { reducer } from './reducer';

export const SavingsContext = createContext();

export const SavingsProvider = ({ state = initialState, children }) => {
  const store = useReducer(reducer, state);
  return (
    <SavingsContext.Provider value={store}>{children}</SavingsContext.Provider>
  );
};

export const useSavings = () => {
  const contextValue = useContext(SavingsContext);
  return contextValue;
};
