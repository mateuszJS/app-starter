import classnames from 'classnames'
import { Typo, TypoProps } from '@ui'
import { useRouter } from 'next/router'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = {
  activeClassName?: string
  onClick?: VoidFunction
} & NextLinkProps &
  TypoProps

const Link = ({
  children,
  activeClassName = '',
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  ...restProps
}: LinkProps) => {
  const { asPath } = useRouter()
  const Component = href ? 'a' : 'button'

  const styledComponent = (
    <Component
      className={classnames('root', {
        [activeClassName]: asPath === href,
      })}
    >
      <Typo {...restProps} />
      <style jsx>{`
        .root {
          display: inline-block;
        }
      `}</style>
    </Component>
  )

  return (
    <NextLink
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref={passHref}
      prefetch={prefetch}
    >
      {styledComponent}
    </NextLink>
  )
}

export default Link
