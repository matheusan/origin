import { addYears, addMonths, subMonths, isSameMonth } from 'date-fns';
import { Goal } from '../types';
import { Icons } from '../components/Icon';

export const initialGoals: Goal[] = [
  {
    id: 'college',
    icon: 'piggy',
    title: 'Go to college'
  },
  {
    id: 'vacation',
    icon: 'vacation',
    title: 'Take a vacation'
  },
  {
    id: 'car',
    icon: 'car',
    title: 'Buy a car'
  },
  {
    id: 'wedding',
    icon: 'wedding',
    title: 'Throw a wedding party'
  },
  {
    id: 'emergency',
    icon: 'vault',
    title: 'Build an emergency fund'
  },
  {
    id: 'baby',
    icon: 'baby',
    title: 'Have a baby'
  }
];

export const initialState = {
  goals: initialGoals,
  editGoal: null,
  loading: false
};

export const ACTION = {
  SET_AMOUNT: 'ACTION/SET_AMOUNT',
  ADD_MONTH: 'ACTION/ADD_MONTH',
  SUBTRACT_MONTH: 'ACTION/SUBTRACT_MONTH',
  EDIT: 'ACTION/EDIT',
  SAVE: 'ACTION/SAVE',
  SAVED: 'ACTION/SAVED'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.EDIT: {
      const goal = state.goals.find(goalEdit => goalEdit.id === action.payload);

      if (!goal.totalAmount) {
        goal['totalAmount'] = 0;
      }

      if (!goal.targetDate) {
        goal['targetDate'] = addYears(new Date(), 4);
      }

      return { ...state, editGoal: goal };
    }

    case ACTION.SET_AMOUNT:
      return {
        ...state,
        editGoal: {
          ...state.editGoal,
          totalAmount: action.payload
        }
      };

    case ACTION.ADD_MONTH:
      return {
        ...state,
        editGoal: {
          ...state.editGoal,
          targetDate: addMonths(state.editGoal.targetDate, 1)
        }
      };

    case ACTION.SUBTRACT_MONTH: {
      // We won't allow the minimum of the same month
      const nextMonth = addMonths(new Date(), 1);
      if (isSameMonth(state.editGoal.targetDate, nextMonth)) {
        return { ...state };
      }
      return {
        ...state,
        editGoal: {
          ...state.editGoal,
          targetDate: subMonths(state.editGoal.targetDate, 1)
        }
      };
    }

    case ACTION.SAVE:
      return {
        ...state,
        goals: state.goals.map(goal =>
          goal.id === state.editGoal.id ? state.editGoal : goal
        ),
        loading: true
      };

    case ACTION.SAVED:
      return { ...state, editGoal: null, loading: false };

    default:
      throw new Error();
  }
};
