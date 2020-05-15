import React from 'react';
import { ScrollArea, Placeholder } from '@storybook/components';

import provideCoverage from '../hoc/provideCoverage';
import CoveragePanel from './CoveragePanel/CoveragePanel';

export const WrappedCoveragePanel = ({ failThreshold, passThreshold, coverageData }) => {
  const hasCoverageData = coverageData && coverageData.length;
  return (
    <ScrollArea vertical>
      {hasCoverageData ? (
        <CoveragePanel failThreshold={failThreshold} passThreshold={passThreshold} coverageData={coverageData} />
      ) : (
          <Placeholder>
            <div>No Coverage Data Found</div>
          </Placeholder>
        )}
    </ScrollArea>
  );
};

export default provideCoverage(WrappedCoveragePanel);
