import React from 'react';

import CoverageSection from '../CoverageSection/CoverageSection';

import '../panel.css';

const CoveragePanel = ({ failThreshold, passThreshold, coverageData = [] }) => (
  <div className="contentBox">
    {
      coverageData.map((coverageEntry, key) => (
        <CoverageSection
          key={key}
          failThreshold={failThreshold}
          passThreshold={passThreshold}
          coverageEntry={coverageEntry}
        />
      ))
    }
  </div>
);

export default CoveragePanel;
