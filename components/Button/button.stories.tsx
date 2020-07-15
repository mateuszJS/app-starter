import React from 'react'
import { text } from '@storybook/addon-knobs'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
}

export const Text = () => <Button text={text('text', 'Hello Button')}></Button>
