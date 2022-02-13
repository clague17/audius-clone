// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { Track } from '../../utils/types'

type Err = {
  err: boolean
}

type Trending = {
  data: Array<Track>
}

const audiusHost = 'https://audius-discovery-10.cultur3stake.com'
const APP_NAME = 'HIREME'

async function get_trending_handler(
  req: NextApiRequest,
  res: NextApiResponse<Trending | Err>
) {
  let url = `${audiusHost}/v1/tracks/trending?app_name=${APP_NAME}`

  let tracks = { err: true }

  await fetch(url)
    .then(function (res) {
      console.log('res', res)
      return res.json()
    })
    .then((body) => {
      console.log('body: ', body)
      tracks = body
    })
    .catch((err) => console.log('error', err))
  return res.status(200).json(tracks)
}

export default get_trending_handler
