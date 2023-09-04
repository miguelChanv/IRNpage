import PropTypes from 'prop-types';

const Heading3 = ( props ) => {
    return <h3 className=" font-markProMedium uppercase">{ props.text }</h3>
}

Heading3.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Heading3
