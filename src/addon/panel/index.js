import React from 'react';
import { ScrollArea, Placeholder } from '@storybook/components';

import provideCoverage from '../hoc/provideCoverage';

import './panel.css';

const getClassNameByPercent = (percent, passThreshold, failThreshold) => {
  if (percent >= passThreshold) {
    return 'coverage-complete';
  } else if (percent <= failThreshold) {
    return 'coverage-none';
  }

  return 'coverage-partial';
};

const CoverageRow = ({ label, passThreshold, failThreshold, rowData: { total, covered, skipped, pct } }) => (
  <tr className={getClassNameByPercent(pct, passThreshold, failThreshold)}>
    <td className="bold">{label}</td>
    <td>{covered}</td>
    <td className={skipped ? 'bold' : ''}>{skipped}</td>
    <td>{total}</td>
    <td>{pct}%</td>
  </tr>
);

const CoverageTable = ({ failThreshold, passThreshold, tableData: { branches, functions, lines, statements } }) => (
  <table className="table-coverage standard-margin">
    <thead className="table-header-coverage">
    <tr>
      <th />
      <th>Covered</th>
      <th>Skipped</th>
      <th>Total</th>
      <th>Percent</th>
    </tr>
    </thead>
    <tbody>
      <CoverageRow label="Branches" failThreshold={failThreshold} passThreshold={passThreshold} rowData={branches} />
      <CoverageRow label="Functions" failThreshold={failThreshold} passThreshold={passThreshold} rowData={functions} />
      <CoverageRow label="Lines" failThreshold={failThreshold} passThreshold={passThreshold} rowData={lines} />
      <CoverageRow label="Statements" failThreshold={failThreshold} passThreshold={passThreshold} rowData={statements} />
    </tbody>
  </table>
);

const CoverageEntry = ({ failThreshold, passThreshold, coverageEntry }) => {
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

const Content = ({ failThreshold, passThreshold, coverageData }) => {
  if (coverageData && coverageData.length) {
    return (
      <div className="contentBox">
        {
          coverageData.map((coverageEntry, key) => (
            <CoverageEntry
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
