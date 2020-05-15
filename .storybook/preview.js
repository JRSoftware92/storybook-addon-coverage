import { addDecorator } from '@storybook/react';
import { withCoverage } from '../src/addon';

const checkCoverageReport = () => {
  try {
    return require('../coverage/coverage-summary.json');
  } catch (e) {
    return false;
  }
};

const coverage = checkCoverageReport();
if (coverage) {
  addDecorator(withCoverage({
    coverage,
    passThreshold: 80,
    failThreshold: 50,
  }));
}
