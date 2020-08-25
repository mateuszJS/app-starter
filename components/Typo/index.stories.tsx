import React from 'react'
import { text, select, boolean } from '@storybook/addon-knobs'
import Typo from '.'

export default {
  title: 'Typography',
  component: Typo,
}

const colors = {
  'undefined (inherit)': undefined,
  primary: 'primary',
  accent: 'accent',
  secondary: 'secondary',
} as const

const variants = {
  'undefined (inherit)': undefined,
  headline: 'headline',
  subtitle: 'subtitle',
  body1: 'body1',
  body2: 'body2',
  button: 'button',
  caption: 'caption',
  overline: 'overline',
} as const

const weights = {
  'undefined (inherit)': undefined,
  'ultra-light': 'ultra-light',
  regular: 'regular',
  medium: 'medium',
  'semi-bold': 'semi-bold',
  bold: 'bold',
} as const

export const Text = () => {
  return (
    <div>
      {/* cannot be fragment, because class has to be added, otherwise selector "&& :global(.custom)" won't work" */}
      <Typo className="custom">
        Typo component can be used as a child of another Typo
        <Typo
          tKey={text('tKey', 'Hello Typography')}
          color={select('color', colors, undefined)}
          variant={select('variant', variants, undefined)}
          weight={select('weight', weights, undefined)}
          className={text('className', 'custom-class-name')}
          inline={boolean('inline', false)}
          loader={text(
            'To display a loader you have to set the width of the loader (loader is visible until there is no content)',
            '30%',
          )}
        />
        to inherit the color, font & text properties
      </Typo>
      <Typo color="secondary" variant="body1" weight="ultra-light">
        Typo accepts&nbsp;
        <Typo inline color="accent">
          children
        </Typo>
        &nbsp; and&nbsp;
        <Typo color="accent" inline>
          i18next properties
        </Typo>
        &nbsp; as well
      </Typo>
      <style jsx>{`
        && :global(.custom) {
          color: tomato;
          font-size: 1.6rem;
          letter-spacing: -0.02rem;
          font-weight: 100;
        }
      `}</style>
    </div>
  )
}
