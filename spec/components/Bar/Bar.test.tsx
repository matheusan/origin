import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Bar from '../../../src/components/Bar';

describe('Bar', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Bar>Bar content</Bar>);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
