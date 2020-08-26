import React from 'react'
import { text, boolean, number } from '@storybook/addon-knobs'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
}

export const ButtonStory = () => (
  <Button
    disabled={boolean('disabled', false)}
    href={text('href', '')}
    tabIndex={number('tabIndex', 0)}
    className={text('className', 'custom-class-name')}
    tKey={text('tKey', 'Hello Button')}
    loader={boolean('loader', false)}
    skeleton={boolean('skeleton', false)}
  />
)
