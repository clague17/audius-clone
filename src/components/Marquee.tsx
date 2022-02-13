import react from 'react'

const audiusHorizontal = '/horizontal_color.png'

const Marquee = () => {
  return (
    <div className="3xl:text-2xl 4xl:text-4xl 4xl:leading-normal relative z-10 w-full overflow-x-hidden overflow-y-clip bg-white py-2 text-white sm:text-xl 2xl:text-xl">
      <div className="relative h-[2rem] w-[200%] w-full animate-marquee overflow-hidden whitespace-nowrap">
        <span className="flex w-full justify-around">
          <img
            className="mx-2 flex h-[2rem]"
            src={audiusHorizontal}
            alt="audius logo"
          />
          <img
            className="mx-2 flex h-[2rem]"
            src={audiusHorizontal}
            alt="audius logo2"
          />
          <img
            className="mx-2 flex h-[2rem]"
            src={audiusHorizontal}
            alt="audius logo3"
          />
          <img
            className="mx-2 flex h-[2rem]"
            src={audiusHorizontal}
            alt="audius logo4"
          />
          <img
            className="mx-2 flex h-[2rem]"
            src={audiusHorizontal}
            alt="audius logo4"
          />
          <img
            className="mx-2 flex h-[2rem]"
            src={audiusHorizontal}
            alt="audius logo4"
          />
        </span>
      </div>
    </div>
  )
}

export default Marquee
