import React from 'react'
import { text } from '@storybook/addon-knobs'
import Typography from '.'

export default {
  title: 'Typography',
  component: Typography,
}

export const Text = () => {
  const props = {
    tKey: text('tKey', 'Hello Typography'),
  }

  return <Typography {...props} />
}
