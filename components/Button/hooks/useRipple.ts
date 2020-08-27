import { useState, MouseEvent } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const useRipple = (duration: number) => {
  const [rippleArray, setRippleArray] = useState<Array<{ top: number; left: number }>>([])
  const [debounceClearRippleArray] = useDebouncedCallback(() => {
    setRippleArray([])
  }, duration)

  const addRipple = (event: MouseEvent) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect()
    const newRipple = {
      left: event.pageX - rippleContainer.x - rippleContainer.width / 2,
      top: event.pageY - rippleContainer.y - rippleContainer.width / 2,
    }

    setRippleArray((prevState) => [...prevState, newRipple])
    debounceClearRippleArray()
  }

  return {
    rippleArray,
    addRipple,
  }
}

export default useRipple
