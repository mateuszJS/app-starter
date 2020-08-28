import { useState, useLayoutEffect, useRef, FormEvent } from 'react'
import { theme, Typo } from '@ui'

type HeightsState = {
  size: number
  heights: {
    [key: string]: number
  }
}

const inputs = [
  {
    value: 'a',
    label: 'A',
  },
  {
    value: 'b',
    label: 'B',
  },
  {
    value: 'c',
    label: 'C',
  },
  {
    value: 'd',
    label: 'D',
  },
  {
    value: 'e',
    label: 'E',
  },
  {
    value: 'f',
    label: 'F',
  },
  {
    value: 'g',
    label: 'G',
  },
  {
    value: 'h',
    label: 'H',
  },
  {
    value: 'i',
    label: 'I',
  },
]

const wormDur = 0.4
const radioDur = 0.2
const timing1 = 'cubic-bezier(0.45,0.05,0.55,0.95)'
const timing2 = 'cubic-bezier(0.5,0,0.5,2)'

const Radio = () => {
  const rootNodeRef = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(inputs[0].value)
  const [worm, setWorm] = useState<HeightsState>({
    size: 0,
    heights: {},
  })
  useLayoutEffect(() => {
    console.log(rootNodeRef.current)
    if (rootNodeRef.current === null) {
      return
    }
    const containerX = rootNodeRef.current.getBoundingClientRect().y
    const inputs = Array.from(
      rootNodeRef.current.querySelectorAll('[value] + label'),
    ) as HTMLLabelElement[]
    const inputsHeights = inputs.reduce(
      (result, input) => ({
        ...result,
        [input.htmlFor]: input.getBoundingClientRect().y - containerX,
      }),
      {} as HeightsState['heights'],
    )

    const heights = Object.entries(inputsHeights)
    const maxDiff = heights[heights.length - 1][1] - heights[0][1]

    setWorm({
      heights: inputsHeights,
      size: Math.ceil(maxDiff * 0.15),
    })
  }, [])

  const onChange = (event: FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  return (
    <div ref={rootNodeRef}>
      {inputs.map((input) => (
        <>
          <input
            id={input.value}
            type="radio"
            name="hopping"
            value={input.value}
            onChange={onChange}
            checked={value === input.value}
          />
          <label htmlFor={input.value}>
            <span className="dot" />
            <Typo variant="body1">{input.label}</Typo>
          </label>
        </>
      ))}
      {Array.from({ length: worm.size }).map((_, index) => (
        <span
          key={index}
          className="worm"
          style={{
            transform: `translateY(${worm.heights[value]}px)`,
            transitionDelay: `${(wormDur / (worm.size * 3)) * index}s`,
            animationDelay: `${(wormDur / (worm.size * 3)) * index}s`,
            // fontSize: (wormSize - index) * (15 / wormSize),
            // opacity: (wormSize - index) / wormSize,
          }}
        />
      ))}
      <style jsx>{`
        div {
          font-size: 12px;
          margin-left: 50px;
          position: relative;
        }
        label {
          display: flex;
          cursor: pointer;
          transition: color ${radioDur}s ${timing1};
          line-height: 1.6em;
        }
        label:not(:first-of-type) {
          margin-top: 1em;
        }
        .dot {
          box-shadow: 0 0 0 0.15em currentColor inset, 0 0.2em 0.2em rgba(0, 0, 0, 0.2),
            0 0.3em 0.2em rgba(0, 0, 0, 0.2) inset;
          margin-right: 0.5em;
          vertical-align: bottom;
          width: 1.5em;
          height: 1.5em;
          border-radius: 50%;
          transition: transform ${radioDur}s ${timing2}, box-shadow ${radioDur}s ${timing1},
            color ${radioDur}s ${timing1};
        }
        input {
          visibility: hidden;
          position: absolute;
        }
        input:checked + label,
        input:checked + label .dot,
        .worm:before {
          color: ${theme.colors.accent};
        }
        input:checked + label {
          transition-delay: ${wormDur}s;
        }
        input:checked + label .dot {
          transition-delay: ${wormDur}s;
          transform: scale(1.2);
        }

        .worm {
          position: absolute;
          top: 0.393em;
          left: 0.393em;
          transition: transform ${wormDur}s ${timing1};
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
        .worm:first-child:before,
        .worm:last-child:before {
          box-shadow: 0 0 1em 0 currentColor;
        }
        @keyframes hop1 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-2em);
          }
        }
        @keyframes hop2 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-2em);
          }
        }
        @keyframes hop3 {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-2em);
          }
        }
        input:nth-of-type(1):checked ~ .worm:before {
          animation-name: hop1;
        }
        input:nth-of-type(2):checked ~ .worm:before {
          animation-name: hop2;
        }
        input:nth-of-type(3):checked ~ .worm:before {
          animation-name: hop3;
        }
      `}</style>
    </div>
  )
}

export default Radio
