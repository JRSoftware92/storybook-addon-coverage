import React from 'react';
import { addons, types } from '@storybook/addons';

import {
  COVERAGE_KEY,
  ADDON_ID,
  ADDON_TITLE,
  PANEL_ID,
} from './constants';
import CoveragePanel from './panel';

addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: ADDON_TITLE,
    paramKey: COVERAGE_KEY,
    render: ({ active, key }) => (
      <CoveragePanel active={active} api={api} key={key} />
    ),
  });
});