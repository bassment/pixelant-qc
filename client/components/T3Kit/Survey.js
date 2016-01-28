import '../../css/globals.css';
import styles from '../../css/T3Kit.css';

import React, {PropTypes} from 'react';

import RadioButton from './RadioButton';

import SurveyStore from '../../stores/SurveyStore';
import SurveyActions from '../../actions/SurveyActions';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Page extends React.Component {
  static propTypes = {
    activeRadioButton: PropTypes.string
  };

  static getStores() {
    return [SurveyStore];
  }

  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  setActiveRadio = evt => {
    SurveyActions.setActiveRadio(evt.target.value);
  };

  render() {
    return (
      <div>
        <h1>T3Kit</h1>
        <h2>Which type of test do you prefer?</h2>
        <form>
          <RadioButton type="layout"
            active={this.props.activeRadioButton === 'layout'}
            onClick={this.setActiveRadio}/>
          <RadioButton type="functional"
            active={this.props.activeRadioButton === 'functional'}
            onClick={this.setActiveRadio}/>
          <RadioButton type="both"
            active={this.props.activeRadioButton === 'both'}
            onClick={this.setActiveRadio}/>
        </form>
        <button className={styles.submitButton}>Next</button>
      </div>
    );
  }
}
