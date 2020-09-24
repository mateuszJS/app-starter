import theme from '.'
import { Typo } from '@ui'

export default {
  title: 'Theme',
}

export const Shadows = () => (
  <div className="root">
    {Object.entries(theme.shadows).map(([name, shadow]) => (
      <div key={name} style={{ boxShadow: shadow }} className="sample">
        <Typo variant="subtitle">{name}</Typo>
        <Typo variant="body2">{shadow}</Typo>
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
        width: 280px;
        height: 80px;
        margin: 20px;
        border-radius: 3px;
      }
    `}</style>
  </div>
)
