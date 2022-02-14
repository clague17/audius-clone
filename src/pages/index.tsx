import Head from 'next/head'
import SongCard from '../components/SongCard'
import Marquee from '../components/Marquee'
import SongSkeleton from '../components/SongSkeleton'
import { useEffect, useState } from 'react'
import { Track } from '../utils/types'
import { RiVipCrownFill, RiArrowRightLine } from 'react-icons/ri'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [trendingTracks, setTrendingTracks] = useState<Array<Track>>([])
  useEffect(() => {
    let host = 'https://audius-clone.vercel.app'
    let localhost = 'http://localhost:3000'
    let req = `${host}/api/get_trending`
    fetch(req)
      .then((res) => res.json())
      .then((body) => {
        setTrendingTracks(body.data)
        setIsLoading(false)
      })
  }, [])

  const renderSongsSkeleton = () => {
    return (
      <div className="w-full">
        <SongSkeleton key={1} />
        <SongSkeleton key={2} />
        <SongSkeleton key={3} />
        <SongSkeleton key={4} />
        <SongSkeleton key={5} />
      </div>
    )
  }

  const renderTrendingTracks = () => {
    return (
      <div>
        <div className="flex justify-between rounded-lg bg-purple-audius px-5 py-2 uppercase text-white">
          <h1 className="flex font-bold">
            <RiVipCrownFill className="my-auto" /> $AUDIO Rewards
          </h1>
          <h1 className="texl-2xl font-medium">
            Top 5 tracks each week win $Audio
          </h1>
          <h1 className="flex font-medium">
            learn more <RiArrowRightLine className="my-auto" />
          </h1>
        </div>
        {trendingTracks.map((track, key) => (
          <div className="w-full">
            <SongCard
              key={key}
              title={track.title}
              artist={track.user.name}
              playCount={track.play_count}
              favoriteCount={track.favorite_count}
              repostCount={track.repost_count}
              duration={track.duration}
              artwork={track.artwork}
            />
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>audius clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Marquee />

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-purple-audius" href="https://audius.co">
            Audius
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Here's what's{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg text-pink-audius">
            Trending
          </code>
        </p>

        {isLoading && renderSongsSkeleton()}
        {trendingTracks.length > 0 && renderTrendingTracks()}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </footer>
    </div>
  )
}
