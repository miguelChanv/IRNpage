import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const Links = (props) => {
    return (
        <Link
            to={props.path}
            className="
            text-lg
                uppercase 
                font-markProMedium 
                transition-all
                hover:text-primary 
                hover:text-base 
            ">
            {props.text}
        </Link>
    )
}

Links.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default Links