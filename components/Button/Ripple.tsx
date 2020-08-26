import { useState, MouseEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

type Props = {
  duration?: number
  color?: string
}

const Ripple = ({ duration = 850 }: Props) => {
  const [rippleArray, setRippleArray] = useState<Array<{ top: number; left: number }>>([])
  const [debounceClearRippleArray] = useDebouncedCallback(() => {
    setRippleArray([])
  }, duration)

  const addRipple = (event: MouseEvent<HTMLDivElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const newRipple = {
      left: event.pageX - rippleContainer.x - rippleContainer.width / 2,
      top: event.pageY - rippleContainer.y - rippleContainer.width / 2,
    }

    setRippleArray((prevState) => [...prevState, newRipple])
    debounceClearRippleArray()
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div onMouseDown={addRipple}>
        {rippleArray.map((ripple, index) => (
          <span key={index} style={ripple} />
        ))}
      </div>
      <style jsx>{`
        div {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transition: background-color 250ms;
        }
        div:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }
        @keyframes ripple {
          to {
            opacity: 0;
            transform: scale(2);
          }
        }
        span {
          transform: scale(0);
          border-radius: 50%;
          position: absolute;
          opacity: 0.75;
          background-color: rgba(255, 255, 255, 0.6);
          animation: ripple ${duration}ms;
          width: 100%;
          padding-top: 100%;
        }
      `}</style>
    </>
  )
}

export default Ripple
