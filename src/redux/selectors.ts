import { differenceInCalendarMonths } from 'date-fns';

export const getMonths = ({ editGoal }): number => {
  const { targetDate } = editGoal;
  return Math.abs(differenceInCalendarMonths(targetDate, new Date()));
};

export const getMonthlyAmounts = ({ editGoal }): number =>
  Math.abs(Math.round(editGoal.totalAmount / getMonths({ editGoal })));

export const getTitle = ({ editGoal }): number => editGoal.title;

export const getIcon = ({ editGoal }): number => editGoal.icon;

export const getGoalId = ({ editGoal }): number => editGoal.id;

export const getTotalAmount = ({ editGoal }): number => editGoal.totalAmount;

export const getTargetDate = ({ editGoal }): number => editGoal.targetDate;
