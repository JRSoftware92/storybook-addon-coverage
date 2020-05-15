import React from 'react';
import { ScrollArea, Placeholder } from '@storybook/components';

import provideCoverage from '../hoc/provideCoverage';
import CoverageSection from './CoverageSection/CoverageSection';

import './panel.css';

const Content = ({ failThreshold, passThreshold, coverageData }) => {
  if (coverageData && coverageData.length) {
    return (
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
  }

  return (
    <Placeholder>
      <div>No Coverage Data Found</div>
    </Placeholder>
  );
};

export const CoveragePanel = ({ failThreshold, passThreshold, coverageData }) => {
  return (
    <ScrollArea vertical>
      {coverageData ? (
        <Content failThreshold={failThreshold} passThreshold={passThreshold} coverageData={coverageData} />
      ) : (
          <Placeholder>
            <div>No Coverage Data Found</div>
          </Placeholder>
        )}
    </ScrollArea>
  );
};

export default provideCoverage(CoveragePanel);
