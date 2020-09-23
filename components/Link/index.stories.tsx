import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import LinkUI from '.'

export default {
  title: 'Basic Components',
}

export const Link = () => {
  return (
    <div>
      <LinkUI
        tKey={text('tKey', 'Hello Link')}
        className={text('className', 'custom-class-name')}
        button={boolean('button', false)}
        inline={boolean('inline', false)}
        skeleton={boolean('skeleton', false)}
        skeletonWidth={text('skeletonWidth', '30%')}
      />
    </div>
  )
}
