import { useState } from "react";
import PropTypes from 'prop-types';

const Volumen = (props) => {
    const [volume, setVolume] = useState(0.3);

    return (
        <div className="flex items-center gap-2">
            {volume == 0.0 && <i className="bi bi-volume-mute-fill text-white text-5xl"></i>}
            {(volume >= 0.1 && volume <= 0.3) && <i className="bi bi-volume-off-fill text-white text-5xl"></i>}
            {(volume > 0.3 && volume <= 0.7) && <i className="bi bi-volume-down-fill text-white text-5xl"></i>}
            {volume > 0.7 && <i className="bi bi-volume-up-fill text-white text-5xl"></i>}
            <input
                className='accent-white h-1'
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => { setVolume(e.target.value); props.handleVolume(e.target.value);}}
            />
        </div>
    )
}

Volumen.propTypes = {
    handleVolume: PropTypes.func.isRequired,
};

export default Volumen
