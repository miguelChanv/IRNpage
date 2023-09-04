import PropTypes from 'prop-types';

const Heading1 = ( props ) => {
    return <h1 className="text-2xl font-markProHeavy uppercase">{ props.text }</h1>
}

Heading1.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Heading1
