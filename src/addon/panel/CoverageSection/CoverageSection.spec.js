import React from 'react';
import { shallow } from 'enzyme';

import CoverageSection from './CoverageSection';

const getWrapper = props => shallow(<CoverageSection {...props} />);

const props = {
  passThreshold: 80,
  failThreshold: 50,
  coverageEntry: {
    fileName: 'fileName',
    result: {
      branches: {},
      lines: {},
      functions: {},
      statements: {},
    },
  },
};

describe('Coverage Entry', () => {
  test('displays the filename for the coverage report above the table', () => {
    const wrapper = getWrapper(props);
    expect(wrapper.find('.header-coverage-section').text()).toEqual('fileName');
  });

  test('displays a coverage table for valid entries', () => {
    const wrapper = getWrapper(props);
    expect(wrapper.find('CoverageTable').prop('fileName')).toEqual('fileName');
  });
});
