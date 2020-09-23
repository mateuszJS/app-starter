import { theme } from '@ui'

export type LoaderProps = {
  size?: 'small' | 'regular' | 'large'
  color?: string
  className?: string
}

const mapSizeToPixels = {
  small: 20,
  regular: 32,
  large: 50,
} as const

const d =
  'M640,290.9C509.2,432.1,401.2,521.1,279.6,521.1S59.9,433.4,59.9,290.8s98-230.3,219.6-230.3 s228.1,89.2,358.9,230.4s238.8,230.2,360.4,230.2s219.6-87.7,219.6-230.3s-98-230.3-219.6-230.3S770.8,149.8,640,290.9z'

const Loader = ({ size = 'regular', color, className }: LoaderProps) => {
  const width = mapSizeToPixels[size]

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 584.2"
      width={width}
      className={className}
    >
      <path className="anim" d={d} />
      <path className="static" d={d} />
      <style jsx>{`
        path {
          fill: none;
          stroke: ${color || theme.colors.accent};
          stroke-width: 114;
        }
        .static {
          opacity: 0.3;
        }
        .anim {
          animation: dash 1.3s linear infinite;
          stroke-dasharray: 1500 1684;
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 3184;
          }
        }
      `}</style>
    </svg>
  )
}

export default Loader
