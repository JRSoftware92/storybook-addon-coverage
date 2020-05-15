import React from 'react';

import CoverageRow from '../CoverageRow/CoverageRow';

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

export default CoverageTable;
