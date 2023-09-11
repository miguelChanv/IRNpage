import Player from "../Player/Player"
import Heading4 from "../Titles/Heading4"
import Heading5 from "../Titles/Heading5"

const Banner = () => {
  return (
    <div className='h-screen bg-banner bg-no-repeat bg-cover p-28 flex flex-col items-start justify-end'>
      <div className="h-full w-full max-w-7xl mx-auto grid grid-rows-2 items-end">
        <Heading4 text="IRN" />
        <div className="grid gap-8">
          <Heading5 text="IRN NATURAL- COMUNICACIONES" />
          <Player />
        </div>
      </div>
    </div>
  )
}

export default Banner
