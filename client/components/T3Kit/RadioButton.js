import React, {PropTypes} from 'react';
import styles from '../../css/T3Kit.css';

const RadioButton = props => {
  const capitalize = word =>
    word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <span>
      <label
        className={props.active ? styles.activeRadioButton : styles.radioButton}
        htmlFor={props.type}>{capitalize(props.type)}</label>
      <input type="radio" id={props.type}
        name="type" value={props.type}
        onClick={props.onClick}/>
    </span>
  );
};

RadioButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default RadioButton;
