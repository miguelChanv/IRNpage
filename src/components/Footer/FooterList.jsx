import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterList = (props) => {
    return (
        <Link
            to={props.path}
            className="
                text-sm  
                font-markProLight
                transition-all
                hover:text-primary 
                hover:text-base
            ">
            {props.text}
        </Link>
    )
}

FooterList.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
};

export default FooterList
