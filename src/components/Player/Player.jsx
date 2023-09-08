// import { useRef } from 'react'
import { useState } from 'react';
import useSound from 'use-sound';
import Music from '../../assets/Fine Day.mp3'
import Volumen from './Volumen';
import Controls from './Controls';

const Player = () => {
    const [volume, setVolume] = useState(0.3);
    const [play, { pause }] = useSound('https://us4freenew.listen2myradio.com/live.mp3?typeportmount=s1_4976_stream_175555272', { volume: volume });
    // const [playSound] = useSound(Music);
    // const audio = useRef()
    // const value = audio.current;
    // const handlePlayer = pause => { pause ? value.pause() : value.play() }
    const handleVolume = (volume) => setVolume(volume)

    return (
        <>
            <div className='flex items-center justify-between'>
                <Controls play={play} pause={pause} />
                <hr className="w-3/5 border-y-2 border-primary" />
                <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
                </span>
                <span className='uppercase text-white text-xl'>Live</span>
                <Volumen handleVolume={handleVolume} />
            </div>
        </>

        // <div className="flex gap-8">
        //     <button onClick={() => {play()}} className='text-white'>Play!</button>
        //     <button onClick={() => {pause()}} className='text-white'>Pause!</button>
        //     <input
        //         className='accent-white h-1'
        //         type="range"
        //         min="0"
        //         max="1"
        //         step="0.1"
        //         value={volume}
        //         onChange={e => setVolume(e.target.value)}
        //     />
        // </div>

        // <>
        //     {/* <audio ref={audio} autoPlay src="https://us4freenew.listen2myradio.com/live.mp3?typeportmount=s1_4976_stream_175555272"></audio> */}
        //     <audio ref={audio} controls src={Music}></audio>
        //     <div className='flex items-center justify-between'>
        //         <Controls handlePlayer={handlePlayer} />
        //         <hr className="w-3/5 border-y-2 border-primary" />
        //         <span className="relative flex h-4 w-4">
        //             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        //             <span className="relative inline-flex rounded-full h-4 w-4 bg-primary"></span>
        //         </span>
        //         <span className='uppercase text-white text-xl'>Live</span>
        //         <Volumen handleVolume={handleVolume} />
        //     </div>
        //     { console.log(audio) }
        // </>
    )
}

export default Player
