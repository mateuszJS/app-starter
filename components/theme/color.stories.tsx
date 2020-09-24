import theme from '.'
import { Typo } from '@ui'

export default {
  title: 'Theme',
}

const isColorTooBright = (hex: string) => {
  const rgb = parseInt(hex.substring(1), 16) // convert rrggbb to decimal
  const r = (rgb >> 16) & 0xff // extract red
  const g = (rgb >> 8) & 0xff // extract green
  const b = (rgb >> 0) & 0xff // extract blue

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b // per ITU-R BT.709

  return luma > 150
}

const getSampleStyles = (hex: string) => ({
  backgroundColor: hex,
  color: isColorTooBright(hex) ? 'black' : 'white',
})

export const Colors = () => (
  <div className="root">
    {Object.entries(theme.colors).map(([name, hex]) => (
      <div key={name} style={getSampleStyles(hex)} className="sample">
        <Typo variant="subtitle">{name}</Typo>
        <Typo>{hex}</Typo>
      </div>
    ))}
    <style jsx>{`
      .root {
        display: flex;
        flex-wrap: wrap;
      }
      .sample {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        margin: 10px;
      }
    `}</style>
  </div>
)
