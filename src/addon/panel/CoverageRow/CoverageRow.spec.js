import React from 'react';
import { shallow } from 'enzyme';

import CoverageRow from './CoverageRow';

const getWrapper = props => shallow(<CoverageRow {...props} />);

const rowData = {
  total: 3,
  covered: 3,
  skipped: 0,
  pct: 70,
};

const props = {
  passThreshold: 80,
  failThreshold: 50,
  label: 'Row Label',
  rowData,
};

describe('Coverage Table Row', () => {
  test('displays a yellow background for partial coverage', () => {
    const wrapper = getWrapper(props);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('displays a green background for passing coverage', () => {
    const wrapper = getWrapper({
      ...props,
      rowData: {
        ...rowData,
        pct: 100,
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('displays a red background for failing coverage', () => {
    const wrapper = getWrapper({
      ...props,
      rowData: {
        ...rowData,
        pct: 0,
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('bolds skipped entries', () => {
    const wrapper = getWrapper({
      ...props,
      rowData: {
        ...rowData,
        skipped: 1,
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
