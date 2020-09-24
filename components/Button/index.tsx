import React, { useState, useEffect, ReactNode, MouseEvent } from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classnames from 'classnames'
import { Typo, Loader, theme } from '@ui'
import useRipple from './hooks/useRipple'
import Ripple from './Ripple'
import css from 'styled-jsx/css'

export interface ButtonProps {
  children?: ReactNode
  disabled?: boolean
  isLink?: boolean
  tabIndex?: number
  className?: string
  tKey?: string
  loader?: boolean
  skeleton?: boolean
  color?: 'secondary' | 'accent'
  variant?: 'outlined'
  icon?: IconDefinition
  iconClassName?: string
  onClick?: (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

type btnAttributesProps = {
  type?: 'button'
  disabled?: boolean
  'aria-disabled'?: boolean
}

const rippleTime = 850
const borderWidth = 2
const paddingHorizontal = 9
const paddingVertical = 16

const { className: iconRootClassName, styles: iconStyles } = css.resolve`
  & {
    margin-right: 5px;
  }
`

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
  icon,
  iconClassName,
  loader,
  onClick = () => null,
}: ButtonProps) => {
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

  const buttonProps: btnAttributesProps = {}
  if (isLink) {
    buttonProps['aria-disabled'] = disabled
  } else {
    buttonProps.type = 'button'
    buttonProps.disabled = disabled
  }

  return (
    <>
      <Component
        className={classnames('root', className, {
          [`color-${color}`]: color,
          [`variant-${variant}`]: variant,
          disabled: disabled,
          skeleton: skeleton,
          loader: loader,
        })}
        tabIndex={disabled ? -1 : tabIndex}
        onClick={onClickHandler}
        {...buttonProps}
      >
        {loader && (
          <span className="loader-wrapper">
            <Loader color="currentColor" />
          </span>
        )}
        <div
          className={classnames('content-wrapper', {
            'hide-content': loader,
          })}
        >
          {icon && (
            <FontAwesomeIcon icon={icon} className={classnames(iconRootClassName, iconClassName)} />
          )}
          {tKey ? <Typo tKey={tKey} variant="button" /> : children}
          {enableTouchRipple ? (
            /* TouchRipple is only needed client-side */
            <Ripple rippleArray={rippleArray} duration={rippleTime} />
          ) : null}
        </div>
      </Component>
      {iconStyles}
      <style jsx>{`
        .root {
          display: inline-block;
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
          box-shadow: ${theme.shadows.verySmall};
        }
        .loader {
          pointer-events: none;
        }
        .variant-outlined {
          color: ${theme.colors.primary};
        }
        .root:before {
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
        .content-wrapper {
          display: flex;
          align-items: center;
        }
        .hide-content {
          opacity: 0;
        }
        .root:hover:before {
          background-color: currentColor;
          opacity: 0.1;
        }
        .root:hover {
          box-shadow: ${theme.shadows.small};
        }
        .root:focus,
        .root:active {
          outline: none;
          box-shadow: ${theme.shadows.normal};
        }
        .root::-moz-focus-inner {
          border-style: none;
        }
        .color-secondary {
          color: ${theme.colors.primary};
          background-color: ${theme.colors.secondary};
          border-color: ${theme.colors.secondary};
        }
        .color-secondary.variant-outlined {
          color: ${theme.colors.secondary};
        }
        .color-accent {
          color: ${theme.colors.complementary};
          background-color: ${theme.colors.accent};
          border-color: ${theme.colors.accent};
        }
        .color-accent.variant-outlined {
          color: ${theme.colors.accent};
        }
        .disabled {
          cursor: default;
          box-shadow: none;
          color: ${theme.colors.disabledLight};
          background-color: ${theme.colors.disabledDark};
          border-color: ${theme.colors.disabledDark};
          pointer-events: none;
        }
        .disabled.variant-outlined {
          color: ${theme.colors.disabledLight};
        }
        .disabled:before {
          display: none;
        }
        .variant-outlined {
          background: none;
          border-width: ${borderWidth}px;
          border-style: solid;
          padding: ${paddingHorizontal - borderWidth}px ${paddingVertical - borderWidth}px;
        }
        .skeleton {
          box-shadow: none;
        }
        .icon {
          margin-right: 5px;
        }
        .loader-wrapper {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default Button
