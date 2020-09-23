import ReactJson from 'react-json-view'
import theme from '.'

export default {
  title: 'Theme',
}

export const Overview = () => <ReactJson src={theme} />
