import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import DatePicker from '../../../src/components/DatePicker';
import { Button } from '../../../src/components/DatePicker/styled';
import { originDefaultTheme } from '../../../src/theme/originDefaultTheme';
import { mountWithTheme } from '../../testutils';

describe('DatePicker', () => {
  const map = {};
  const removeEventListener = jest.fn();
  let wrapper: ShallowWrapper;

  beforeAll(() => {
    global.removeEventListener = removeEventListener;
    global.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
  });

  beforeEach(() => {
    const mockDate = new Date(1604977200000);
    jest.spyOn(Date, 'now').mockReturnValue(+mockDate);
    wrapper = shallow(<DatePicker />);
  });

  it('renders', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire up function when click next', () => {
    const up = jest.fn();
    wrapper = shallow(<DatePicker onClickNext={up} />);
    const nextButton = wrapper.find(Button).at(1);
    nextButton.simulate('click');
    expect(up).toHaveBeenCalled();
  });

  it('should fire down function when click prev', () => {
    const down = jest.fn();
    wrapper = shallow(<DatePicker onClickPrev={down} />);
    const nextButton = wrapper.find(Button).at(0);
    nextButton.simulate('click');
    expect(down).toHaveBeenCalled();
  });

  describe('when using the keyboard', () => {
    it('should fire up function when arrow right', () => {
      const up = jest.fn();
      mountWithTheme(<DatePicker onClickNext={up} />, originDefaultTheme);
      map.keydown({ keyCode: 39 });
      expect(up).toHaveBeenCalled();
    });

    it('should fire down function when arrow left', () => {
      const down = jest.fn();
      mountWithTheme(<DatePicker onClickPrev={down} />, originDefaultTheme);
      map.keydown({ keyCode: 37 });
      expect(down).toHaveBeenCalled();
    });
  });

  it('should remove eventlistener when unmounting', () => {
    const mounted = mountWithTheme(<DatePicker />, originDefaultTheme);
    expect(map.keydown).toBeDefined();

    mounted.unmount();
    expect(removeEventListener).toHaveBeenCalled();
  });
});
