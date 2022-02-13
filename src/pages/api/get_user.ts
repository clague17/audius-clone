// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../utils/types'

type Err = {
  err: boolean
}

const audiusHost = 'https://audius-discovery-10.cultur3stake.com'
const APP_NAME = 'HIREME'

const disclosureId = 'E2O1R'

async function get_user_handler(
  req: NextApiRequest,
  res: NextApiResponse<User | Err>
) {
  let url = `${audiusHost}/v1/users/${disclosureId}?app_name=${APP_NAME}`

  let user = { err: true }

  await fetch(url)
    .then(function (res) {
      console.log('res', res)
      return res.json()
    })
    .then((body) => {
      console.log('body: ', body)
      user = body
    })
    .catch((err) => console.log('error', err))
  return res.status(200).json(user)
}

export default get_user_handler
