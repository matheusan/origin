import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Label from '../../../src/components/Label';

describe('Label', () => {
  let wrapper: ShallowWrapper;

  it('renders', () => {
    wrapper = shallow(<Label>Hello dolly</Label>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render lavel with input', () => {
    wrapper = shallow(
      <Label text="My label">
        <input />
      </Label>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
