import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import fs from 'fs'
import Mixpanel from 'mixpanel'
import url from 'url'

const filePath = path.resolve('.', 'public/images/pixel.png')
const stat = fs.statSync(filePath)

const mixpanel = Mixpanel.init(process.env.MIXPANEL_KEY as string, {
  api_host: 'https://api-eu.mixpanel.com',
})

const sendDataToMixpanel = (queryParam: string, ip: string | undefined) => {
  const id = queryParam.slice(0, -1)
  const actionType = queryParam[queryParam.length - 1]
  mixpanel.people.set(
    id,
    {
      read: true,
      ip,
    },
    {
      $ip: ip,
    },
  )
  mixpanel.people.increment(id, actionType)
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const queryParam = url.parse(req.url || '', true).query.v as string

  if (queryParam) {
    const xForwarderHeader = (req.headers['x-forwarded-for'] as string) || ''
    const lastProxy = xForwarderHeader.split(',').pop() || ''
    const ip = lastProxy.trim() || req.connection.remoteAddress || req.socket.remoteAddress

    sendDataToMixpanel(queryParam, ip)
  }

  res.writeHead(200, {
    'Content-Type': 'image/png',
    'Content-Length': stat.size,
  })
  const readStream = fs.createReadStream(filePath)
  readStream.pipe(res)
}
