import { NextApiRequest, NextApiResponse } from 'next'

// import Cors from 'cors'

// // Initializing the cors middleware
// const cors = Cors({
//   methods: ['GET', 'HEAD'],
// })

// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// function runMiddleware(req, res, fn) {
//   return new Promise((resolve, reject) => {
//     fn(req, res, (result) => {
//       if (result instanceof Error) {
//         return reject(result)
//       }

//       return resolve(result)
//     })
//   })
// }

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // await runMiddleware(req, res, cors)

  res.status(200).json({ text: 'Hello' })

  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(JSON.stringify({ name: 'John Doe' }))

  // const {
  //   query: { pid }, // the same as with pages
  // } = req
}
