import { SavingsProvider, useSavings } from './context';
import { setAmount, addMonth, subtractMonth, save, saved } from './actions';
import * as selectors from './selectors';

export {
  useSavings,
  setAmount,
  addMonth,
  subtractMonth,
  save,
  saved,
  selectors
};
export default SavingsProvider;
