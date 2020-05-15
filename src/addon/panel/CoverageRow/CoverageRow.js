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
  <tr id={`coverage-row-${label}`} className={getClassNameByPercent(pct, passThreshold, failThreshold)}>
    <td id="cell-label" className="bold">{label}</td>
    <td id="cell-covered">{covered}</td>
    <td id="cell-skipped" className={skipped ? 'bold' : ''}>{skipped}</td>
    <td id="cell-total">{total}</td>
    <td id="cell-pct">{pct}%</td>
  </tr>
);

export default CoverageRow;
