import React from 'react'
import classnames from 'classnames'
import css from 'styled-jsx/css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Typo, TypoProps } from '@ui'

export type LinkProps = {
  href?: string
  onClick?: VoidFunction
} & TypoProps

const { className: iconClassName, styles: iconStyles } = css.resolve`
  & {
    margin-left: -4px;
  }
`

// forwardRef needed for next.js link
const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      className, // skeleton,
      inline,
      children,
      tKey,
      href,
      ...restProps
    },
    ref,
  ) => (
    <a
      href={href}
      ref={ref}
      className={classnames('root', className, {
        inline: inline,
      })}
    >
      <Typo color="accent" variant="body1" {...restProps}>
        <Typo tKey={tKey} inline>
          {children}
        </Typo>
        <span className="icon-wrapper">
          <span className="arrow-tail" />
          <FontAwesomeIcon icon={faAngleRight} className={iconClassName} />
        </span>
      </Typo>
      {iconStyles}
      <style jsx>{`
        .root {
          display: block;
          cursor: pointer;
          background: none;
          border: none;
          outline: none;
          padding: 0;
        }
        .inline {
          display: inline-block;
        }
        .arrow-tail {
          position: relative;
          bottom: 0.283em;
          display: inline-block;
          background-color: currentColor;
          width: 5px;
          height: 2px;
          margin-left: 5px;
          opacity: 0;
          transition: width 0.2s, opacity 0.2s;
        }
        .root:hover .arrow-tail {
          width: 10px;
          opacity: 1;
        }
        .icon-wrapper {
          opacity: 0.85;
          position: relative;
          top: 1px;
        }
      `}</style>
    </a>
  ),
)

export default Link
