import React from 'react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import ButtonUI from '.'

export default {
  title: 'Basic Components',
}

const colors = {
  'undefined (primary)': undefined,
  accent: 'accent',
  secondary: 'secondary',
} as const

const variants = {
  'undefined (contained)': undefined,
  outlined: 'outlined',
} as const

export const Button = () => (
  <>
    <ButtonUI
      disabled={boolean('disabled', false)}
      isLink={boolean('isLink', false)}
      tabIndex={number('tabIndex', 0)}
      className={text('className', 'custom-class-name')}
      tKey={text('tKey', 'Hello Button')}
      loader={boolean('loader', false)}
      skeleton={boolean('skeleton', false)}
      color={select('color', colors, undefined)}
      variant={select('variant', variants, undefined)}
      onClick={action('onClick')}
      icon={boolean('icon', false) ? faCoffee : undefined}
      iconClassName={text('iconClassName', 'icon-custom-class-name')}
    />
  </>
)
