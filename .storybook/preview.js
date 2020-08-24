import { I18nextProvider } from 'react-i18next';
import React from 'react';
import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import GlobalStyles from '../styles/global'
import i18n from './i18n'; // cannot share the config with next

addDecorator(storyFn => (
  <I18nextProvider i18n={i18n}>
    <div style={{ padding: 10 }}>
      <style jsx="true" global="true">
        {GlobalStyles}
      </style>
      {storyFn()}
    </div>
  </I18nextProvider>
))

addDecorator(
  withKnobs,
);

