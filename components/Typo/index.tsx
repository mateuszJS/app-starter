import { Trans, TransProps } from 'react-i18next'
import classnames from 'classnames'
import { theme } from '@ui'

type Props = {
  width?: number
  loader?: boolean
  tKey?: string
  color?: 'accent' | 'secondary' | 'inherit'
  activeClassName?: string
} & Pick<TransProps, 'components' | 'values' | 'children'>

const Typography = ({
  width,
  loader,
  tKey,
  children,
  color,
  activeClassName,
  ...restProps
}: Props) => {
  return (
    <p className={classnames('root', color, activeClassName)}>
      {tKey ? <Trans i18nKey={tKey} {...restProps} /> : children}
      <style jsx>{`
        .primary {
          color: ${theme.colors.primary};
        }
        .accent {
          color: ${theme.colors.accent};
        }
        .secondary {
          color: ${theme.colors.secondary};
        }
        .inherit {
          color: inherit;
        }
      `}</style>
    </p>
  )
}

export default Typography
