import { SavingsProvider, useSavings } from './context';
import { setAmount, addMonth, subtractMonth, save, saved } from './actions';
import { initialState } from './reducer';
import * as selectors from './selectors';

export {
  useSavings,
  setAmount,
  addMonth,
  subtractMonth,
  save,
  saved,
  selectors,
  initialState
};
export default SavingsProvider;
