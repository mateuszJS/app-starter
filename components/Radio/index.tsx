import { useState, useLayoutEffect, useRef, FormEvent, Fragment } from 'react'
import { theme, Typo } from '@ui'
import { getWormState, triggerWormHorizontalAnimation } from './utils'
import { WormState } from './types'

type Option = {
  value: string
  label: string
  disabled?: boolean
}

export type RadioProps = {
  options: Option[]
  value: Option['value']
  onChange: (value: Option['value']) => void
  className?: string
}

const wormDur = 0.4
const radioDur = 0.2
const timing1 = 'cubic-bezier(0.45,0.05,0.55,0.95)'
const timing2 = 'cubic-bezier(0.5,0,0.5,2)'

const wormDefaultState: WormState = {
  size: 0,
  heights: {},
}

const Radio = ({ value, options, onChange, className }: RadioProps) => {
  const rootNodeRef = useRef<HTMLDivElement | null>(null)
  const [worm, setWorm] = useState<WormState>(wormDefaultState)

  useLayoutEffect(() => {
    if (rootNodeRef.current && worm.size) {
      triggerWormHorizontalAnimation(rootNodeRef.current)
    }
  }, [value])

  useLayoutEffect(() => {
    if (rootNodeRef.current) {
      setWorm(getWormState(rootNodeRef.current, worm))
    }
  }, [options.reduce((acc, option) => acc + option.label, '')])

  const onChangeHandler = (event: FormEvent<HTMLInputElement>) => {
    onChange(event.currentTarget.value)
  }

  const wormAnimationDelayFactor = wormDur / (worm.size * 3)

  return (
    <div className={className} ref={rootNodeRef}>
      {options.map((option) => (
        <Fragment key={option.value}>
          <input
            id={option.value}
            type="radio"
            name="hopping"
            value={option.value}
            onChange={onChangeHandler}
            checked={value === option.value}
            disabled={option.disabled}
          />
          <label htmlFor={option.value}>
            <span className="dot" />
            <Typo variant="body1">{option.label}</Typo>
          </label>
        </Fragment>
      ))}
      {Array.from({ length: worm.size }).map((_, index) => (
        <span
          key={worm.size + index}
          className="worm"
          style={{
            transform: `translateY(${worm.heights[value as keyof typeof worm.heights]}px)`,
            transitionDelay: `${wormAnimationDelayFactor * index}s`,
            animationDelay: `${wormAnimationDelayFactor * index}s`,
            opacity: (worm.size - index) / worm.size,
          }}
        />
      ))}
      <style jsx>{`
        div {
          font-size: 12px; /* to change size of the worm, or the radio buttons */
          margin-left: 50px;
          position: relative;
        }
        label {
          display: flex;
          cursor: pointer;
          line-height: 1.6em;
          color: ${theme.colors.primary};
        }
        label:not(:first-of-type) {
          margin-top: 1em;
        }
        .dot {
          box-shadow: 0 0 0 0.15em currentColor inset;
          margin-right: 0.5em;
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          flex-shrink: 0;
          transition: transform ${radioDur}s ${timing2}, box-shadow ${radioDur}s ${timing1},
            color ${radioDur}s ${timing1};
        }
        input {
          visibility: hidden;
          position: absolute;
        }
        input:checked + label .dot {
          color: ${theme.colors.accent};
          transition-delay: ${wormDur}s;
          transform: scale(1.2);
        }
        input:disabled + label {
          color: ${theme.colors.disabledDark};
        }
        .worm {
          position: absolute;
          top: 0.393em;
          left: 0.393em;
          transition: transform ${wormDur}s ${timing1};
          pointer-events: none;
          color: ${theme.colors.accent};
        }
        .worm:before {
          display: block;
          content: '';
          width: 0.7em;
          height: 0.7em;
          border-radius: 50%;
          background-color: red;
          animation-delay: inherit;
          animation-duration: ${wormDur}s;
          animation-timing-function: ${timing1};
          background: currentColor;
        }
        @keyframes hop {
          to,
          from {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-2em);
          }
        }
        .worm-hop .worm:before {
          animation-name: hop;
        }
      `}</style>
    </div>
  )
}

export default Radio
