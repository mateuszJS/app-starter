import React, { ReactElement, Children } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

type Props = {
  children: ReactElement<{ className?: string | null }> // for just children the best is ReactNode
  activeClassName: string
  href: string
}

const ActiveLink = ({ children, activeClassName, ...restProps }: Props) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === restProps.href ? `${childClassName} ${activeClassName}`.trim() : childClassName

  return (
    <Link {...restProps}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink
