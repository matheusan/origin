import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Money from '../../../src/components/Money';
import { TextAlign } from '../../../src/types';

describe('Money', () => {
  let wrapper: ShallowWrapper;

  it('renders', () => {
    wrapper = shallow(<Money amount={12345.67} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render value as $0.00', () => {
    wrapper = shallow(<Money />);
    expect(wrapper.text()).toBe('$0.00');
  });

  [
    { amount: 2.5, output: '$2.50' },
    { amount: 2.05, output: '$2.05' },
    { amount: 0.07, output: '$0.07' },
    { amount: 299, output: '$299.00' },
    { amount: 1233.0, output: '$1,233.00' },
    { amount: 12345678.1, output: '$12,345,678.10' }
  ].forEach(({ amount, output }) => {
    it(`should render value as ${output}`, () => {
      wrapper = shallow(<Money amount={amount} />);
      expect(wrapper.text()).toBe(output);
    });
  });

  it('should render round amount', () => {
    wrapper = shallow(<Money amount={12345.67} round />);
    expect(wrapper.text()).toBe('$12,345');
  });

  it('should align text to center', () => {
    wrapper = shallow(
      <Money amount={12345.67} round textAlign={TextAlign.center} />
    );
    const styled = wrapper.dive();
    expect(styled.props().textAlign).toBe('center');
  });
});
