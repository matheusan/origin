import { ACTION } from './reducer';

export const edit = (goalId: string) => ({
  type: ACTION.EDIT,
  payload: goalId
});

export const setAmount = (amount: number) => ({
  type: ACTION.SET_AMOUNT,
  payload: amount
});

export const addMonth = () => ({
  type: ACTION.ADD_MONTH
});

export const subtractMonth = () => ({
  type: ACTION.SUBTRACT_MONTH
});

export const save = () => ({
  type: ACTION.SAVE
});

export const saved = () => ({
  type: ACTION.SAVED
});
