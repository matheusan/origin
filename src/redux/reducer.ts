import { addYears, addMonths, subMonths, isSameMonth } from 'date-fns';

export const initialState = {
  totalAmount: 25000.0,
  targetDate: addYears(new Date(), 4),
  loading: false
};

export const ACTION = {
  SET_AMOUNT: 'ACTION/SET_AMOUNT',
  ADD_MONTH: 'ACTION/ADD_MONTH',
  SUBTRACT_MONTH: 'ACTION/SUBTRACT_MONTH',
  SAVE: 'ACTION/SAVE',
  SAVED: 'ACTION/SAVED'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_AMOUNT:
      return { ...state, totalAmount: action.payload };
    case ACTION.ADD_MONTH:
      return { ...state, targetDate: addMonths(state.targetDate, 1) };
    case ACTION.SUBTRACT_MONTH: {
      // We won't allow the minimum of the same month
      const nextMonth = addMonths(new Date(), 1);
      if (isSameMonth(state.targetDate, nextMonth)) {
        return { ...state };
      }
      return { ...state, targetDate: subMonths(state.targetDate, 1) };
    }
    case ACTION.SAVE:
      return { ...state, loading: true };
    case ACTION.SAVED:
      return { ...state, loading: false };
    default:
      throw new Error();
  }
};
