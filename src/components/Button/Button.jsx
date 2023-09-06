import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      className='
        h-10 
        w-32 
        text-sm 
        font-markProMedium 
        border
        bg-primary 
        text-white 
        uppercase 
        rounded-md
        transition-all
        hover:text-primary 
        hover:border-primary 
        hover:bg-transparent 
      '>
      {props.text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button
