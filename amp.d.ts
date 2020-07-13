declare namespace JSX {
  interface AmpTimeAgo {
    width?: string
    height?: string
    layout?: string
    children?: string
    datetime?: string
  }
  interface IntrinsicElements {
    'amp-timeago': AmpTimeAgo
  }
}
