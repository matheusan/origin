import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import MoneyInput from '../../../src/components/MoneyInput';
import { Input } from '../../../src/components/MoneyInput/styled';

describe('MoneyInput', () => {
  let wrapper: ShallowWrapper;

  it('renders', () => {
    wrapper = shallow(<MoneyInput value={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render proper separators', () => {
    wrapper = shallow(
      <MoneyInput value={1234.99} thousandSeparator="." decimalSeparator="," />
    );
    expect(wrapper.find(Input).props().value).toBe('1.234,99');
  });

  it('should fire onChange action', () => {
    const onChangeFn = jest.fn();
    const event = {
      persist: jest.fn(),
      currentTarget: { name: '', value: '0.009' }
    };
    wrapper = shallow(<MoneyInput onChange={onChangeFn} />);
    const input = wrapper.find(Input);
    input.simulate('change', event);
    expect(onChangeFn).toHaveBeenCalledWith(event, { name: '', value: 0.09 });
  });

  it('should update input with correct value', async () => {
    const onChangeFn = jest.fn();
    const event = {
      persist: jest.fn(),
      currentTarget: { name: '', value: '0.009' }
    };
    wrapper = shallow(<MoneyInput value={0.0} onChange={onChangeFn} />);
    let input = wrapper.find(Input);
    input.simulate('change', event);
    input = wrapper.find(Input);
    expect(input.props().value).toBe('0.09');
  });

  it('should update input with correct value', async () => {
    const onChangeFn = 'notAFunction';
    const event = {
      persist: jest.fn(),
      currentTarget: { name: '', value: '0.009' }
    };
    wrapper = shallow(<MoneyInput value={0.0} onChange={onChangeFn} />);
    let input = wrapper.find(Input);
    input.simulate('change', event);
    input = wrapper.find(Input);
    expect(input.props().value).toBe('0.09');
  });
});
