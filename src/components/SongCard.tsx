import react from 'react'

import Song from '../../example.json'
import { secsToMins, shortenThousands } from '../utils/utilities'

type SongCardProps = {
  title: string
  artist: string
  image: string
  playCount: number
  favorites: number
}

const formatTime = (time: number) => {
  var [minutes, seconds] = secsToMins(time)
  return `${minutes}:${seconds}`
}

const SongCard = () => {
  return (
    <>
      <div
        id="parent"
        className="bg-green flex w-full rounded-xl border-b p-4 drop-shadow-md"
      >
        <div id="img">
          <img src={Song['artwork']['150x150']} alt="Song Image" />
        </div>
        <div id="details" className="flex-col overflow-hidden">
          <div id="info" className="flex-col overflow-hidden">
            <div id="left">
              <h1 className="text-left text-4xl">{Song.title}</h1>
              <h1 className="text-left text-2xl">{Song.user.name}</h1>
            </div>
            <div id="right" className="absolute top-0 right-0 inline-flex">
              <h1>{formatTime(Song.duration)}</h1>
            </div>
            <div>
              <h1>{shortenThousands(Song.play_count)}</h1>
            </div>
          </div>

          <div id="actions"></div>
        </div>
      </div>
    </>
  )
}

export default SongCard
