import { addMonths, subMonths } from 'date-fns';
import { reducer, ACTION } from '../../src/redux/reducer';
import {
  addMonth,
  subtractMonth,
  save,
  saved,
  setAmount
} from '../../src/redux/actions';

describe('reducer', () => {
  it('should set total amount', () => {
    const state = { totalAmount: 0 };
    const action = setAmount(1234);
    const newState = reducer(state, action);

    expect(action).toMatchObject({
      type: ACTION.SET_AMOUNT,
      payload: 1234
    });

    expect(newState).toMatchObject({ totalAmount: 1234 });
  });

  it('should add 1 month to given date', () => {
    const state = { targetDate: new Date(1604977200000) };
    const action = addMonth();
    const newState = reducer(state, action);

    expect(action).toMatchObject({
      type: ACTION.ADD_MONTH
    });

    const expectedDate = addMonths(state.targetDate, 1);
    expect(newState).toMatchObject({ targetDate: expectedDate });
  });

  it('should subtract 1 month from given date', () => {
    const state = { targetDate: new Date(1604977200000) };
    const action = subtractMonth();
    const newState = reducer(state, action);

    expect(action).toMatchObject({
      type: ACTION.SUBTRACT_MONTH
    });

    const expectedDate = subMonths(state.targetDate, 1);
    expect(newState).toMatchObject({ targetDate: expectedDate });
  });

  it('should not subtrack if month and year are equal', () => {
    const mockDate = new Date(1604977200000);
    jest.spyOn(Date, 'now').mockReturnValue(+mockDate);

    const state = { targetDate: addMonths(new Date(1604977200000), 1) };
    const action = subtractMonth();
    const newState = reducer(state, action);

    expect(action).toMatchObject({
      type: ACTION.SUBTRACT_MONTH
    });

    expect(newState).toMatchObject({ targetDate: state.targetDate });
  });

  it('should set loading as true', () => {
    const state = { loading: false };
    const action = save();
    const newState = reducer(state, action);

    expect(action).toMatchObject({
      type: ACTION.SAVE
    });

    expect(newState).toMatchObject({ loading: true });
  });

  it('should set loading as false', () => {
    const state = { loading: true };
    const action = saved();
    const newState = reducer(state, action);

    expect(action).toMatchObject({
      type: ACTION.SAVED
    });

    expect(newState).toMatchObject({ loading: false });
  });

  it('should throw when action is invalid', () => {
    const state = {};
    const action = { type: 'noop' };
    try {
      expect(reducer(state, action)).toThrowError();
    } catch {}
  });
});
