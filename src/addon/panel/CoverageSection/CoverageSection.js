import React from 'react';

import CoverageTable from '../CoverageTable/CoverageTable';

const CoverageSection = ({ failThreshold, passThreshold, coverageEntry }) => {
  const { fileName, result } = coverageEntry;
  return (
    <div className="standard-margin">
      {
        result ? (
          <>
            <span className="header-coverage-section bold">{fileName}</span>
            <CoverageTable failThreshold={failThreshold} passThreshold={passThreshold} tableData={result} />
          </>
        ) : (
          <div>No Coverage Data Found for {fileName}</div>
        )
      }
    </div>
  );
};

export default CoverageSection;
