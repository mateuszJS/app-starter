import { Trans, TransProps } from 'react-i18next'
import classnames from 'classnames'
import { theme } from '@ui'

export type TypoProps = {
  tKey?: string
  color?: 'primary' | 'accent' | 'secondary'
  variant?: 'headline' | 'subtitle' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'
  weight?: 'ultra-light' | 'regular' | 'medium' | 'semi-bold' | 'bold'
  className?: string
  inline?: boolean
  skeleton?: boolean
  skeletonWidth?: string
  noWrap?: boolean
} & Pick<TransProps, 'components' | 'values' | 'children'>

const mapVariantToNode = {
  headline: 'h1',
  subtitle: 'h2',
  body1: 'p',
  body2: 'p',
  button: 'span',
  caption: 'p',
  overline: 'p',
} as const

const Typo = ({
  tKey,
  children,
  color,
  variant,
  weight,
  className,
  inline,
  skeleton,
  skeletonWidth = 'auto',
  noWrap,
  ...restProps
}: TypoProps) => {
  const Component = inline ? 'span' : mapVariantToNode[variant || 'body1']

  return (
    <Component
      className={classnames('root', className, {
        [`color-${color}`]: color,
        [`variant-${variant}`]: variant,
        [`weight-${weight}`]: weight,
        skeleton: skeleton,
        inline: inline,
        'no-wrap': noWrap,
        'variant-reset': variant,
      })}
      style={skeleton ? { width: skeletonWidth } : undefined}
    >
      {tKey ? <Trans i18nKey={tKey} {...restProps} /> : children}
      <style jsx>{`
        .inline {
          display: inline-block;
        }
        .root {
          margin: 0;
          color: inherit;
          font-size: inherit;
          font-weight: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          text-transform: inherit;
        }
        .variant-reset {
          font-size: initial;
          font-weight: normal;
          letter-spacing: normal;
          line-height: normal;
          text-transform: initial;
        }
        .variant-headline {
          font-size: 2rem;
          line-height: 1.2;
          letter-spacing: 0.05em;
        }
        .variant-subtitle {
          font-size: 1.2rem;
          line-height: 1.4;
          letter-spacing: 0.02em;
        }
        .variant-body1 {
          font-size: 1rem;
        }
        .variant-body2 {
          font-size: 0.9rem;
        }
        .variant-button {
          font-size: 1rem;
          font-weight: 300;
          text-transform: uppercase;
        }
        .variant-caption {
          font-size: 0.9rem;
        }
        .variant-overline {
          font-size: 1rem;
          letter-spacing: 0.1em;
        }
        .color-primary {
          color: ${theme.colors.primary};
        }
        .color-accent {
          color: ${theme.colors.accent};
        }
        .color-secondary {
          color: ${theme.colors.secondary};
        }
        .color-inherit {
          color: inherit;
        }
        .weight-ultra-light {
          font-weight: 200;
        }
        .weight-regular {
          font-weight: 400;
        }
        .weight-medium {
          font-weight: 500;
        }
        .weight-semi-bold {
          font-weight: 600;
        }
        .weight-bold {
          font-weight: 700;
        }
        .skeleton {
          white-space: nowrap;
        }
        .skeleton.inline {
          vertical-align: middle;
          height: 1em;
        }
        .skeleton:not(.inline) {
          transform: scaleY(0.7);
        }
        .skeleton:before {
          content: ${`'\u00a0'`};
        }
        .no-wrap {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      `}</style>
    </Component>
  )
}

export default Typo
