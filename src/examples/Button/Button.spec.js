import React from 'react';

import Button from './Button';

describe('Button', () => {
  test('renders correctly', () => {
    expect(<Button className="className" label="My Button" />).toMatchSnapshot();
  });
});
