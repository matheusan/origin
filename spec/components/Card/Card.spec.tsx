import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Card from '../../../src/components/Card';
import { Top, Bottom, Single } from '../../../src/components/Card/styled';

describe('Card', () => {
  const singleText = 'Single text';
  const topText = 'Top text';
  const bottomText = 'Bottom text';
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Card>{singleText}</Card>);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render two child elements', () => {
    wrapper = shallow(
      <Card>
        <Card.Top>{topText}</Card.Top>
        <Card.Bottom>{bottomText}</Card.Bottom>
      </Card>
    );
    expect(wrapper.find(Top).length).toBe(1);
    expect(wrapper.find(Bottom).length).toBe(1);
  });

  it('should render top child element', () => {
    wrapper = shallow(
      <Card>
        <Card.Top>{topText}</Card.Top>
      </Card>
    );
    expect(wrapper.find(Top).length).toBe(1);
  });

  it('should render bottom child element', () => {
    wrapper = shallow(
      <Card>
        <Card.Bottom>{topText}</Card.Bottom>
      </Card>
    );
    expect(wrapper.find(Bottom).length).toBe(1);
  });

  it('should render single child element', () => {
    wrapper = shallow(
      <Card>
        <Card.Single>{topText}</Card.Single>
      </Card>
    );
    expect(wrapper.find(Single).length).toBe(1);
  });
});
