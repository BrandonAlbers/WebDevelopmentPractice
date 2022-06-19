import PropTypes from "prop-types";
const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: props.color }}
      className="btn"
    >
      {props.text}
    </button>
  );
};

Button.defaulProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  // onCLick: PropTypes.func.isRequired
};

export default Button;
