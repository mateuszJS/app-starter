import { Trans, TransProps } from 'react-i18next'
import classnames from 'classnames'
import { theme } from '@ui'

type Props = {
  loader?: string
  tKey?: string
  color?: 'primary' | 'accent' | 'secondary'
  variant?: 'headline' | 'subtitle' | 'body1' | 'body2' | 'button' | 'caption' | 'overline'
  weight?: 'ultra-light' | 'regular' | 'medium' | 'semi-bold' | 'bold'
  className?: string
  inline?: boolean
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

const Typography = ({
  tKey,
  children,
  color,
  variant,
  weight,
  loader,
  className,
  inline,
  ...restProps
}: Props) => {
  const Component = mapVariantToNode[variant || 'body1']

  return (
    <Component
      className={classnames('root', className, {
        [`color-${color}`]: color,
        [`variant-${variant}`]: variant,
        [`weight-${weight}`]: weight,
        loader: loader,
        inline: inline,
      })}
    >
      {tKey ? <Trans i18nKey={tKey} {...restProps} /> : children}
      <style jsx>{`
        .inline {
          display: inline-block;
        }
        .loader:empty.inline {
          vertical-align: middle;
          height: 1em;
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
        .loader:empty {
          background: black;
          position: relative;
          overflow: hidden;
          width: ${loader};
          border-radius: 3px;
        }
        .loader:empty:not(.inline) {
          transform: scaleY(0.7);
        }
        @keyframes wave {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .loader:empty:before {
          content: ${`'\u00a0'`};
          opacity: 0;
          pointer-events: none;
        }
        .loader:empty:after {
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          content: '';
          position: absolute;
          animation: wave 1.6s linear 0.5s infinite;
          transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
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
          font-size: 1.1rem;
          text-transform: uppercase;
        }
        .variant-caption {
          font-size: 0.9rem;
        }
        .variant-overline {
          font-size: 1rem;
          letter-spacing: 0.1em;
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
      `}</style>
    </Component>
  )
}

export default Typography