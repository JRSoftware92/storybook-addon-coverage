import React from 'react';

import CoveragePanel from './CoveragePanel';

export default {
  title: 'Addon/Coverage',
  component: CoveragePanel,
};

const parameters = {
  coverageFiles: ['CoverageRow.js'],
};

export const WithoutCoverageData = () => (
  <CoveragePanel
    failThreshold={50}
    passThreshold={80}
    coverageData={[{fileName: 'noCoverage.js'}]}
  />
);

WithoutCoverageData.story = { parameters };

const getCoverageRowData = (covered = 0, skipped = 0, total = 0, pct = 0) => ({
  pct, total: 1, covered: 0, skipped: 0,
});

const getCoverageEntries = (numberOfEntries = 1) => {
  return Array(numberOfEntries).fill().map((_, index) => {
    return {
      fileName: `Coverage Entry ${index}`,
      result: {
        branches: getCoverageRowData(1, 0, 2, 50),
        functions: getCoverageRowData(4, 1, 5, 80),
        lines: getCoverageRowData(30, 0, 40, 75),
        statements: getCoverageRowData(20, 0, 30, 66),
      }
    };
  });
};

export const WithOneCoverageEntry = () => (
  <CoveragePanel
    failThreshold={50}
    passThreshold={80}
    coverageData={getCoverageEntries(1)}
  />
);

WithOneCoverageEntry.story = { parameters };


export const WithManyCoverageEntries = () => (
  <CoveragePanel
    failThreshold={50}
    passThreshold={80}
    coverageData={getCoverageEntries(6)}
  />
);

WithManyCoverageEntries.story = { parameters };
