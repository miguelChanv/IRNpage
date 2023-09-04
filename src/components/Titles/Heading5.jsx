import PropTypes from 'prop-types';

const Heading5 = (props) => {
    return <h5 className="text-white text-4xl font-markProBold uppercase">{props.text}</h5>
}

Heading5.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Heading5
