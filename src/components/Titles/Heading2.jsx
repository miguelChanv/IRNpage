import PropTypes from 'prop-types';

const Heading2 = ( props ) => {
    return <h2 className="text-lg font-markProHeavy uppercase">{ props.text }</h2>
}

Heading2.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Heading2
