import { WormState } from './types'

const wormSegmentsPerPixel = 0.15
// TODO: should depend on the font-size on the root element

export const getWormState = (rootNode: HTMLDivElement, currentState: WormState) => {
  const containerX = rootNode.getBoundingClientRect().y
  const labels = Array.from(rootNode.querySelectorAll('[value] + label')) as HTMLLabelElement[]

  if (!labels.length) {
    return currentState
  }

  const labelsHeights = labels.reduce(
    (result, input) => ({
      ...result,
      [input.htmlFor]: input.getBoundingClientRect().y - containerX,
    }),
    {} as WormState['heights'],
  )

  const heights = Object.entries(labelsHeights)
  const maxDiff = heights[heights.length - 1][1] - heights[0][1]

  return {
    heights: labelsHeights,
    size: Math.ceil(maxDiff * wormSegmentsPerPixel),
  }
}

export const triggerWormHorizontalAnimation = (rootNode: HTMLDivElement) => {
  rootNode.classList.remove('worm-hop')
  void rootNode.offsetWidth
  rootNode.classList.add('worm-hop')
}
