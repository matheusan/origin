import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Segment from '../../../src/components/Segment';

describe('Segment', () => {
  let wrapper: ShallowWrapper;

  it('renders', () => {
    wrapper = shallow(<Segment>This is my content</Segment>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render all child elements', () => {
    wrapper = shallow(
      <Segment>
        <span>This is the first element</span>
        <div>This is the second element</div>
        <strong>This is a strong element</strong>
        <ul>
          <li>This</li>
          <li>is</li>
          <li>a</li>
          <li>multilevel</li>
          <li>element</li>
        </ul>
      </Segment>
    );
    expect(wrapper.find('span').length).toBe(1);
    expect(wrapper.find('div').length).toBe(1);
    expect(wrapper.find('strong').length).toBe(1);
    expect(wrapper.find('ul').length).toBe(1);
    expect(wrapper.find('ul li').length).toBe(5);
  });
});
