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
        tKey={text('tKey', 'Hello Typography ←')}
        className={text('className', 'custom-class-name')}
        inline={boolean('inline', false)}
        skeleton={boolean('skeleton', false)}
        skeletonWidth={text('skeletonWidth', '30%')}
        noWrap={boolean('noWrap', false)}
      />
    </div>
  )
}
