import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import Header from '../../../src/components/Header';
import {
  SingleTitle,
  IconTitle,
  IconDescription
} from '../../../src/components/Header/styled';

describe('Header', () => {
  let wrapper: ShallowWrapper;

  it('renders', () => {
    wrapper = shallow(<Header>This is my header</Header>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('when single title', () => {
    it('should render single title', () => {
      const text = 'This is my header';
      wrapper = shallow(<Header>{text}</Header>);
      const singleTitle = wrapper.find(SingleTitle);
      expect(singleTitle.length).toBe(1);
      expect(singleTitle.text()).toBe(text);
    });
  });

  describe('when icon title', () => {
    it('should render all elements', () => {
      wrapper = shallow(
        <Header icon="arrow">
          <Header.Title>My title</Header.Title>
          <Header.Description>Subdescription</Header.Description>
        </Header>
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('should render title and description without icon', () => {
      wrapper = shallow(
        <Header>
          <Header.Title>My title</Header.Title>
          <Header.Description>Subdescription</Header.Description>
        </Header>
      );
      expect(wrapper.find('Icon').length).toBe(0);
    });

    it('should render only title', () => {
      wrapper = shallow(
        <Header>
          <Header.Title>My title</Header.Title>
        </Header>
      );
      expect(wrapper.find(IconTitle).length).toBe(1);
    });

    it('should render only description', () => {
      wrapper = shallow(
        <Header>
          <Header.Description>Description</Header.Description>
        </Header>
      );
      expect(wrapper.find(IconDescription).length).toBe(1);
    });
  });
});
