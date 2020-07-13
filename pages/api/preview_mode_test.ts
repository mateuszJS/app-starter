import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  // ...
  res.setPreviewData({})
  res.end('Preview mode enabled')
  /*
  sets some cookies on the browser which turns on the preview mode.
  Any requests to Next.js containing these cookies will be considered as the preview mode,
  and the behavior for statically generated pages will change
  */
}
// https://nextjs.org/docs/advanced-features/preview-mode
