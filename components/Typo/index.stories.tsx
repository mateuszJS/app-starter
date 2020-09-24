import React from 'react'
import { text, select, boolean } from '@storybook/addon-knobs'
import css from 'styled-jsx/css'
import TypoUI from '.'

export default {
  title: 'Basic Components',
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

export const Typo = () => {
  return (
    <div>
      {/* cannot be fragment, because class has to be added somewhere */}
      <TypoUI className={customClassName}>
        Typo component can be used as a child of another Typo
        <TypoUI
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
        to inherit the color, font &amp; text properties
      </TypoUI>
      <TypoUI color="secondary" variant="body1" weight="ultra-light">
        Typo accepts&nbsp;
        <TypoUI inline color="accent">
          children
        </TypoUI>
        &nbsp; and&nbsp;
        <TypoUI color="accent" inline>
          i18next properties
        </TypoUI>
        &nbsp; as well.
      </TypoUI>
      <TypoUI variant="caption" color="secondary" weight="ultra-light">
        This is the most common component, used almost in each basic component.
      </TypoUI>
      {styles}
    </div>
  )
}
