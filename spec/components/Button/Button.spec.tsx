import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Button from '../../../src/components/Button';

describe('Button', () => {
  const buttonText = 'My button';
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Button>{buttonText}</Button>);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render loading when prop is set', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find('Icon').length).toBe(1);
  });

  it('should render seconday color when prop is set', () => {
    wrapper.setProps({ secondary: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render flex width when prop is set', () => {
    wrapper.setProps({ flex: true });
    expect(wrapper).toMatchSnapshot();
  });
});
