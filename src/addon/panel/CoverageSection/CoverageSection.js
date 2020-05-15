import React from 'react';

import CoverageTable from '../CoverageTable/CoverageTable';

const CoverageSection = ({ failThreshold, passThreshold, coverageEntry }) => {
  const { fileName, result } = coverageEntry;
  if (!result) {
    console.warn(`Warning: No Coverage found for ${fileName}. Coverage table not rendered.`);
    return null;
  }
  return (
    <div id={`coverage-section${fileName}`} className="standard-margin">
      <>
        <span className="header-coverage-section bold">{fileName}</span>
        <CoverageTable fileName={fileName} failThreshold={failThreshold} passThreshold={passThreshold} tableData={result} />
      </>
    </div>
  );
};

export default CoverageSection;
