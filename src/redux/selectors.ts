import { differenceInCalendarMonths } from 'date-fns';

export const getMonths = (state): number => {
  const { targetDate } = state;
  return Math.abs(differenceInCalendarMonths(targetDate, new Date()));
};

export const getMonthlyAmounts = (state): number =>
  Math.abs(Math.round(state.totalAmount / getMonths(state)));
