import React from 'react';
import { Placeholder } from '@storybook/components';

import CoverageTable from '../CoverageTable/CoverageTable';

const CoverageSection = ({ failThreshold, passThreshold, coverageEntry }) => {
  const { fileName, result } = coverageEntry;
  return (
    <div className="standard-margin">
      <span className="header-coverage-section bold">{fileName}</span>
      {
        result ? (
          <CoverageTable failThreshold={failThreshold} passThreshold={passThreshold} tableData={result} />
        ) : (
          <Placeholder>
            <div>No Coverage Data Found for {fileName}</div>
          </Placeholder>
        )
      }
    </div>
  );
};

export default CoverageSection;
