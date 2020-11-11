import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Grid from '../../../src/components/Grid';

describe('Grid', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Grid>
        <span>One thing</span>
        <span>Two things</span>
      </Grid>
    );
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one element', () => {
    wrapper = shallow(
      <Grid>
        <span>One thing</span>
      </Grid>
    );
    expect(wrapper.find('span').length).toBe(1);
  });

  it('should render wathever child element is given', () => {
    wrapper = shallow(
      <Grid>
        <span>One thing</span>
        <button>My button</button>
        <img src="noop.jpg" />
      </Grid>
    );
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('button').length).toBe(1);
    expect(wrapper.find('img').length).toBe(1);
  });
});
