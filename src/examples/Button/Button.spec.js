import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    expect(shallow(<Button className="className" label="My Button" />).html()).toMatchSnapshot();
  });
});
