import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import LoaderUI from '.'

export default {
  title: 'Basic Components',
}

export const Loader = () => {
  return (
    <div>
      <LoaderUI
        color={text('color', '')}
        className={text('custom-class-name', '')}
        size={select('size', ['small', 'regular', 'large'], 'regular')}
      />
    </div>
  )
}
