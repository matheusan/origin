import * as React from 'react';
import { addYears } from 'date-fns';

import Savings from '../../../src/components/Savings';
import { originDefaultTheme } from '../../../src/theme/originDefaultTheme';
import { mountWithProviders } from '../../testutils';

import { Input } from '../../../src/components/MoneyInput/styled';
import { Money } from '../../../src/components/Money/styled';
import { Bottom } from '../../../src/components/Card/styled';
import { Button } from '../../../src/components/DatePicker/styled';
import SubmitButton from '../../../src/components/Button';

describe('Savings', () => {
  const map = {};
  const removeEventListener = jest.fn();
  const initialState = {
    totalAmount: 0,
    targetDate: addYears(new Date(1604977200000), 2),
    loading: false
  };
  const mountProviders = mountWithProviders(originDefaultTheme, initialState);
  let wrapper;

  beforeAll(() => {
    const mockDate = new Date(1604977200000);
    jest.spyOn(Date, 'now').mockReturnValue(+mockDate);
    global.removeEventListener = removeEventListener;
    global.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
  });

  it('renders', () => {
    wrapper = mountProviders(<Savings />);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when starting with empty state', () => {
    it('should calculate on input', () => {
      const localMountProviders = mountWithProviders(originDefaultTheme);
      wrapper = localMountProviders(<Savings />);

      const input = wrapper.find(Input);
      const event = {
        persist: jest.fn(),
        currentTarget: { name: '', value: '25000.00' }
      };
      input.simulate('change', event);

      const money = wrapper.find(Money);
      expect(money.text()).toBe('$521');
      const bottomCardDescription = wrapper.find(Bottom);
      expect(bottomCardDescription.text()).toBe(
        'You’re planning 48 monthly deposits to reach your $25,000.00 goal by November 2024.'
      );
    });
  });

  describe('when starting with defined state', () => {
    it('should calculate on date change', () => {
      const localInitialState = { ...initialState, totalAmount: 25000.0 };
      const localMountProviders = mountWithProviders(
        originDefaultTheme,
        localInitialState
      );
      wrapper = localMountProviders(<Savings />);

      const buttons = wrapper.find(Button);
      buttons.at(1).simulate('click');

      const money = wrapper.find(Money);
      expect(money.text()).toBe('$1,000');
      const bottomCardDescription = wrapper.find(Bottom);
      expect(bottomCardDescription.text()).toBe(
        'You’re planning 25 monthly deposits to reach your $25,000.00 goal by December 2022.'
      );
    });
  });

  it('should change button state while submiting', () => {
    const localMountProviders = mountWithProviders(originDefaultTheme);
    wrapper = localMountProviders(<Savings />);

    let button = wrapper.find(SubmitButton);
    button.simulate('click');

    button = wrapper.find(SubmitButton);
    expect(button.props().loading).toBeTruthy();
  });
});
