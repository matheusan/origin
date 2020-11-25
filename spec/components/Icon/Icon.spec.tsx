import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Icon from '../../../src/components/Icon';

describe('Icon', () => {
  let wrapper: ShallowWrapper;

  it('renders', () => {
    wrapper = shallow(<Icon name="academy" />);
    expect(wrapper).toMatchSnapshot();
  });

  [
    'academy',
    'arrow',
    'dollar',
    'house',
    'loading',
    'logo',
    'tip',
    'piggy',
    'vacation',
    'car',
    'wedding',
    'vault',
    'baby'
  ].forEach(icon => {
    it(`should render ${icon} icon`, () => {
      wrapper = shallow(<Icon name={icon} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('renders fragment if invalid icon name is given', () => {
    wrapper = shallow(<Icon name="noop" />);
    expect(wrapper.find('Fragment').length).toBe(1);
  });

  it('renders fragment if no icon name is given', () => {
    wrapper = shallow(<Icon />);
    expect(wrapper.find('Fragment').length).toBe(1);
  });
});
