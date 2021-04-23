import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import GlobalStyles from '../styles/global'

addDecorator(storyFn => (
  // <ProviderExample>
    <div style={{ padding: 10 }}>
      <style jsx="true" global="true">
        {GlobalStyles}
      </style>
      {storyFn()}
    </div>
  // </ProviderExample>
))

addDecorator(
  withKnobs,
);
