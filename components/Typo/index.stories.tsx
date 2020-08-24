import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import Typo from '.'

export default {
  title: 'Typography',
  component: Typo,
}

export const Text = () => {
  return (
    <>
      <Typo activeClassName="custom">
        aa
        <Typo
          tKey={text('tKey', 'Hello Typography')}
          color={select(
            'color',
            [undefined, 'accent', 'secondary', 'inherit'] as Array<
              'accent' | 'secondary' | 'inherit'
            >,
            undefined,
          )}
        />
      </Typo>
      <style jsx>{`
        .custom {
          color: tomato;
        }
      `}</style>
    </>
  )
}
