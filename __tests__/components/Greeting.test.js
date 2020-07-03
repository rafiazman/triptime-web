/** @format */

'use strict';

import React from 'react';

import { shallow } from 'enzyme';
import Greeting from '../../components/Greeting';
import { advanceTo, clear } from 'jest-date-mock';

describe('<Greeting />', () => {
  it('does not render Good afternoon between the times of 12am and 6am', () => {
    advanceTo(new Date(2020, 0, 1, 3));

    const wrapper = shallow(<Greeting name='Tester' />);

    expect(wrapper.text()).not.toContain('Good afternoon');

    clear();
  });
});
