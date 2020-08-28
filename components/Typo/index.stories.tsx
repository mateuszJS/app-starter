import React from 'react'
import { text, select, boolean } from '@storybook/addon-knobs'
import css from 'styled-jsx/css'
import Typo from '.'

export default {
  title: 'Typography',
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

const { className: customClassName, styles } = css.resolve`
  .root {
    color: tomato;
    font-size: 1.6rem;
    letter-spacing: -0.02rem;
    font-weight: 100;
  }
`

export const TypoStory = () => {
  return (
    <div>
      {/* cannot be fragment, because class has to be added, otherwise selector "&& :global(.custom)" won't work" */}
      <Typo className={customClassName}>
        Typo component can be used as a child of another Typo
        <Typo
          tKey={text('tKey', 'Hello Typography ←')}
          color={select('color', colors, undefined)}
          variant={select('variant', variants, undefined)}
          weight={select('weight', weights, undefined)}
          className={text('className', 'custom-class-name')}
          inline={boolean('inline', false)}
          skeleton={boolean('skeleton', false)}
          skeletonWidth={text('skeletonWidth', '30%')}
          noWrap={boolean('noWrap', false)}
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
      <Typo variant="caption" color="secondary" weight="ultra-light">
        To display the skeleton you have to set the width of the skeleton (skeleton is visible until
        there is no content)
      </Typo>
      {styles}
    </div>
  )
}
