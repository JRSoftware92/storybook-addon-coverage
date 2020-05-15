import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Example Components', module)
  .add('Button', () => <Button label="My Button" />);
