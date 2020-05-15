import React from 'react';

import CoverageRow from '../CoverageRow/CoverageRow';

const CoverageTable = ({ fileName, failThreshold, passThreshold, tableData: { branches, functions, lines, statements } }) => (
  <table id={`coverage-table-${fileName}`} className="table-coverage standard-margin">
    <thead className="table-header-coverage">
      <tr>
        <th />
        <th id="header-cell-covered">Covered</th>
        <th id="header-cell-skipped">Skipped</th>
        <th id="header-cell-total">Total</th>
        <th id="header-cell-pct">Percent</th>
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

export default CoverageTable;
