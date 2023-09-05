import { useRef } from 'react'
import Volumen from './Volumen';
import Controls from './Controls';

const Player = () => {
    const audio = useRef()
    const value = audio.current;
    const handlePlayer = (pause) => {pause ? value.pause() : value.play()}
    const handleVolume = volume => audio.current.volume = volume

    return (
        <>
            <audio ref={audio} autoPlay src="https://us4freenew.listen2myradio.com/live.mp3?typeportmount=s1_4976_stream_175555272"></audio>
            <div className='flex items-center justify-between'>
                <Controls handlePlayer={handlePlayer}/>
                <hr className="w-3/5 border-y-2 border-primary" />
                <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                </span>
                <span className='uppercase text-white text-xl'>Live</span>
                <Volumen handleVolume={handleVolume} />
            </div>
        </>
    )
}

export default Player