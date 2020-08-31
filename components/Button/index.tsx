import React, { useState, useEffect, ReactNode, MouseEvent } from 'react'
import classnames from 'classnames'
import { Typo, theme } from '@ui'
import useRipple from './hooks/useRipple'
import Ripple from './Ripple'

interface Props {
  children?: ReactNode
  disabled?: boolean
  isLink?: boolean
  tabIndex?: number
  className?: string
  tKey?: string
  loader?: boolean
  skeleton?: boolean
  icon?: string // (should refer to Icon component)
  color?: 'secondary' | 'accent'
  variant?: 'outlined'
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

type buttonProps = {
  type?: 'button'
  disabled?: boolean
  'aria-disabled'?: boolean
}

const rippleTime = 850

const Button = ({
  children,
  disabled,
  isLink,
  tabIndex = 0,
  className,
  tKey,
  skeleton,
  color,
  variant,
  onClick = () => null,
}: Props) => {
  const [isMounted, setIsMounted] = useState(false)
  const { rippleArray, addRipple } = useRipple(rippleTime)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const enableTouchRipple = isMounted && !disabled
  const Component = isLink ? 'a' : 'button'
  const onClickHandler = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    addRipple(event)
    onClick(event)
  }

  const buttonProps: buttonProps = {}
  if (isLink) {
    buttonProps['aria-disabled'] = disabled
  } else {
    buttonProps.type = 'button'
    buttonProps.disabled = disabled
  }
  const borderWidth = 2
  const paddingHorizontal = 9
  const paddingVertical = 16

  return (
    <>
      <Component
        className={classnames('root', className, {
          [`color-${color}`]: color,
          [`variant-${variant}`]: variant,
          disabled: disabled,
          skeleton: skeleton,
        })}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={onClickHandler}
        {...buttonProps}
      >
        {tKey ? <Typo tKey={tKey} variant="button" /> : children}
        {enableTouchRipple ? (
          /* TouchRipple is only needed client-side */
          <Ripple rippleArray={rippleArray} duration={rippleTime} />
        ) : null}
      </Component>
      <style jsx>{`
        .root {
          display: inline-flex;
          overflow: hidden;
          cursor: pointer;
          user-select: none;
          position: relative;
          padding: ${paddingHorizontal}px ${paddingVertical}px;
          border-radius: 4px;
          border: none;
          transition: box-shadow 250ms;
          color: ${theme.colors.complementary};
          background-color: ${theme.colors.primary};
          border-color: ${theme.colors.primary};
          box-shadow: ${theme.shadows.button.normal};
        }
        :before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transition: opacity 250ms;
          pointer-events: none;
          opacity: 0;
        }
        :hover:before {
          background-color: currentColor;
          opacity: 0.1;
        }
        :hover {
          box-shadow: ${theme.shadows.button.hover};
        }
        :focus,
        :active {
          outline: none;
          box-shadow: ${theme.shadows.button.focus};
        }
        ::-moz-focus-inner {
          border-style: none;
        }
        .color-secondary {
          color: ${theme.colors.primary};
          background-color: ${theme.colors.secondary};
          border-color: ${theme.colors.secondary};
        }
        .color-accent {
          color: ${theme.colors.complementary};
          background-color: ${theme.colors.accent};
          border-color: ${theme.colors.accent};
        }
        .disabled {
          cursor: default;
          box-shadow: none;
          color: ${theme.colors.disabledLight};
          background-color: ${theme.colors.disabledDark};
          border-color: ${theme.colors.disabledDark};
        }
        .disabled:before {
          display: none;
        }
        .variant-outlined {
          background: none;
          border: ${borderWidth}px solid;
          padding: ${paddingHorizontal - borderWidth}px ${paddingVertical - borderWidth}px;
        }
        .skeleton {
          box-shadow: none;
        }
      `}</style>
    </>
  )
}

export default Button
