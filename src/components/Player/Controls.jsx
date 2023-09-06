import { useState } from "react"
import PropTypes from 'prop-types';

const Controls = (props) => {
    const [playing, setPlaying] = useState(false)

    return (

        <>
            {/* <button onClick={() => props.play()} className='text-white'>Play!</button>
            <button onClick={() => props.pause()} className='text-white'>Pause!</button> */}
            <button
                onClick={() => {!playing ? props.play() : props.pause(); setPlaying(!playing)}}
                className='text-white hover:scale-110 transition-all'>
                {playing ?
                    <i className="bi bi-pause-fill text-7xl"></i> :
                    <i className="bi bi-play-fill text-7xl"></i>
                }
            </button>
        </>
    )
}

Controls.propTypes = {
    play: PropTypes.func.isRequired,
    pause: PropTypes.func.isRequired,
};

export default Controls
