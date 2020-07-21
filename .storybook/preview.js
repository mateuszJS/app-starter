import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import GlobalStyles from '../styles/global'

addDecorator(storyFn => (
  <div style={{ padding: 10 }}>
    <style jsx global>
      {GlobalStyles}
    </style>
    {storyFn()}
  </div>
))

addDecorator(
  withKnobs,
);

