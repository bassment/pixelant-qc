import '../../css/globals.css';
import styles from '../../css/T3Kit.css';

import React, {PropTypes} from 'react';

import SurveyActions from '../../actions/SurveyActions';

export default class Page extends React.Component {
  static propTypes = {
    activeRadioButton: PropTypes.string
  };

  setActiveRadio = evt => SurveyActions.setActiveRadio(evt.target.value);

  render() {
    return (
      <div>
        <h1>T3Kit</h1>
        <h2>Which type of test do you prefer?</h2>
        <form>
          <label
            className={this.props.activeRadioButton === 'layout' &&
              this.props.activeRadioButton !== null  ?
              styles.activeRadioButton :
              styles.radioButton}
            htmlFor="layout"> Layout </label>
          <input type="radio" id="layout"
            name="type" value="layout"
            onClick={this.setActiveRadio}/>
          <label
            className={this.props.activeRadioButton === 'functional' &&
              this.props.activeRadioButton ?
              styles.activeRadioButton :
              styles.radioButton}
            htmlFor="functional">Functional</label>
          <input type="radio" id="functional"
            name="type" value="functional"
            onClick={this.setActiveRadio}/>
          <label
            className={this.props.activeRadioButton === 'both' &&
              this.props.activeRadioButton ?
              styles.activeRadioButton :
              styles.radioButton}
            htmlFor="both">Both</label>
          <input type="radio" id="both"
            name="type" value="both"
            onClick={this.setActiveRadio}/>
        </form>
        <button className={styles.submitButton}>Next</button>
      </div>
    );
  }
}
