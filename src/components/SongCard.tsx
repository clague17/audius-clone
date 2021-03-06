import react from 'react'

import Song from '../../example.json'
import { numToHumanReadable, shortenThousands } from '../utils/utilities'
import { RiVipCrownFill } from 'react-icons/ri'

type SongCardProps = {
  idx: number
  title: string
  artist: string
  playCount: number
  favoriteCount: number
  repostCount: number
  duration: number
  artwork: {
    '150x150': 'string'
    '480x480': 'string'
    '1000x1000': 'string'
  }
}

const formatTime = (time: number) => {
  var [hours, minutes, seconds] = numToHumanReadable(time)
  if (hours == '0') {
    return `${minutes}:${seconds}`
  }
  return `${hours}:${minutes}:${seconds}`
}

const SongCard = (props: SongCardProps) => {
  return (
    <div
      id="parent"
      className="m-4 flex rounded-xl border bg-white p-4 drop-shadow-md"
    >
      <div className="align-center my-auto mr-2 text-gray-400">
        {props.idx + 1 <= 5 && <RiVipCrownFill />}
        <h1 className="text-md">{props.idx + 1}</h1>
      </div>
      <div id="img">
        <img
          className="rounded-md"
          src={props['artwork']['150x150']}
          alt="song image"
        />
      </div>
      <div
        id="details"
        className="relative ml-4 flex w-full flex-col justify-between"
      >
        <div id="info" className="flex-col overflow-hidden">
          <div id="left" className="line-1 w-[85%] ">
            <h1 className="truncate text-left text-2xl">{props.title}</h1>
            <h1 className="text-left text-lg">{props.artist}</h1>
          </div>
          <div
            id="right"
            className="absolute top-0 right-0 inline-flex text-gray-500"
          >
            <h1>{formatTime(props.duration)}</h1>
          </div>
        </div>
        <div
          id="socialstats"
          className="flex justify-between text-sm text-gray-400"
        >
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-auto h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <h1 className="my-auto mx-2">{props.repostCount} reposts</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="m-auto h-3 w-3"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="my-auto ml-2">{props.favoriteCount} favorites</h1>
          </div>
          <div className="inline-flex">
            <h1>{shortenThousands(props.playCount)} plays</h1>
          </div>
        </div>
        <div
          id="actions"
          className="m-0 flex justify-between border-t pt-2 text-gray-400"
        >
          <div id="socialBtns" className="flex w-[15%] justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongCard
