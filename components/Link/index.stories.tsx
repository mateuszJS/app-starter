import React from 'react'
import { text, boolean, select } from '@storybook/addon-knobs'
import LinkUI from '.'

export default {
  title: 'Basic Components',
}

const components = {
  'undefined (default a)': undefined,
  a: 'a',
  button: 'button',
  span: 'span',
} as const

export const Link = () => {
  return (
    <div>
      <LinkUI
        tKey={text('tKey', 'Hello Link')}
        className={text('className', 'custom-class-name')}
        component={select('component', components, undefined)}
        inline={boolean('inline', false)}
        skeleton={boolean('skeleton', false)}
        skeletonWidth={text('skeletonWidth', '30%')}
      />
    </div>
  )
}
