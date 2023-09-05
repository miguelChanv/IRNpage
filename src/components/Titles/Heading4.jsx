import PropTypes from 'prop-types';

const Heading4 = ( props ) => {
    return <h4 className="text-white text-8xl font-markProBold uppercase">{ props.text }</h4>
}

Heading4.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Heading4
