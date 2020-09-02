import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import Link from '.'

export default {
  title: 'Link',
}

export const TypoStory = () => {
  return (
    <div>
      <Link
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
