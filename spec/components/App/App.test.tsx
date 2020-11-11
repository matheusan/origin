import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../../../src/components/App';

describe('App', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
