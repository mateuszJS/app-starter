import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
// import GlobalStyles from '../styles/global'

addDecorator(
  withKnobs,
  // (storyFn) => (
  //   <>
  //     <style jsx global>
  //       {GlobalStyles}
  //     </style>
  //     {storyFn()}
  //   </>
  // ),
);
