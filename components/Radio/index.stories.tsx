import React, { useState } from 'react'
import { text, object } from '@storybook/addon-knobs'
import Radio from '.'

export default {
  title: 'Radio',
}

export const RadioStory = () => {
  const [value, setValue] = useState('c')
  return (
    <Radio
      className={text('className', 'custom-class-name')}
      value={value}
      onChange={setValue}
      options={object('options', [
        {
          value: 'a',
          label: 'Option A',
          disabled: true,
        },
        {
          value: 'b',
          label: 'Option B',
        },
        {
          value: 'c',
          label: 'Option C',
        },
        {
          value: 'd',
          label: 'Option D',
        },
        {
          value: 'e',
          label: 'Option E',
        },
        {
          value: 'f',
          label: 'Option F',
        },
        {
          value: 'g',
          label: 'Option G',
        },
        {
          value: 'h',
          label: 'Option H',
        },
        {
          value: 'i',
          label: 'Option I',
        },
      ])}
    />
  )
}
