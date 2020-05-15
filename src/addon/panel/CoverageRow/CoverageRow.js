import React from 'react';

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

export default CoverageRow;
