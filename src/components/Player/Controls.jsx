import { useState } from "react"
import PropTypes from 'prop-types';

const Controls = (props) => {
    const [pause, setPause] = useState(true)

    return (
        <button
            onClick={() => { setPause(!pause); props.handlePlayer(pause)}}
            className='text-white hover:scale-110 transition-all'>
            {pause ?
                <i className="bi bi-pause-fill text-7xl"></i> :
                <i className="bi bi-play-fill text-7xl"></i>
            }
        </button>
    )
}

Controls.propTypes = {
    handlePlayer: PropTypes.func.isRequired,
};

export default Controls
