import React, { useState, useEffect, ReactNode } from 'react'
import classnames from 'classnames'
import { Typo, theme } from '@ui'
import Ripple from './Ripple'

interface Props {
  children?: ReactNode
  disabled?: boolean
  href?: string
  tabIndex?: number
  className?: string
  tKey?: string
  loader?: boolean
  skeleton?: boolean
  icon?: string // (should refer to Icon component)
}

type buttonProps = {
  type?: 'button'
  disabled?: boolean
  'aria-disabled'?: boolean
}

const Button = ({ children, disabled, href, tabIndex = 0, className, tKey }: Props) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const enableTouchRipple = isMounted && !disabled
  const Component = href ? 'a' : 'button'

  const buttonProps: buttonProps = {}
  if (Component === 'button') {
    buttonProps.type = 'button'
    buttonProps.disabled = disabled
  } else {
    buttonProps['aria-disabled'] = disabled
  }

  return (
    <>
      <Component
        className={classnames('root', className, {
          disabled: disabled,
        })}
        tabIndex={disabled ? -1 : tabIndex}
        {...buttonProps}
      >
        {tKey ? <Typo tKey={tKey} variant="button" /> : children}
        {enableTouchRipple ? (
          /* TouchRipple is only needed client-side, x2 boost on the server. */
          <Ripple />
        ) : null}
      </Component>
      <style jsx>{`
        .root {
          overflow: hidden;
          user-select: none;
          position: relative;
          padding: 9px 16px;
          border-radius: 4px;
          border: none;
          background-color: ${theme.colors.accent};
          transition: box-shadow 250ms;
          color: #ddd;
          box-shadow: inset 0px -1px 2px 0px rgba(255, 255, 255, 0.1),
            0px 2px 4px 1px rgba(0, 0, 0, 0.2);
        }
        .root:hover {
          box-shadow: inset 0px -4px 4px 0px rgba(255, 255, 255, 0.2),
            0px 3px 6px 2px rgba(0, 0, 0, 0.25);
        }
        .root:focus,
        .root:active {
          outline: none;
          box-shadow: inset 0px -5px 5px 0px rgba(255, 255, 255, 0.25),
            0px 4px 7px 2px rgba(0, 0, 0, 0.3);
        }
        .root::-moz-focus-inner {
          border-style: none;
        }
        .root.disabled {
          box-shadow: none;
        }
      `}</style>
    </>
  )
}

export default Button
