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
    activeRadioButton: PropTypes.string,
    activeStep: PropTypes.string
  };
  static getStores() {
    return [SurveyStore];
  }
  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  setActiveRadio = evt => SurveyActions.setActiveRadio(evt.target.value);
  backOneStep = () => SurveyActions.backOneStep();

  sendSurveyData = () => {
    SurveyActions.sendSurveyData(this.props.activeRadioButton);
  };

  render() {
    let step = null;

    const firstStepForm = (
      <div>
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
        <button
          className={styles.submitButton}
          onClick={this.sendSurveyData}>Test</button>
      </div>
    );

    const finalStepForm = (
      <div>
        <h2>The reports was sent on your email!</h2>
        <button className={styles.button} onClick={this.backOneStep}>Back</button>
      </div>
    );

    switch (this.props.activeStep) {
    case 'firstStep': {
      step = firstStepForm;
      break;
    }
    case 'finalStep': {
      step = finalStepForm;
      break;
    }
    default: {
      step = null;
      break;
    }}

    return (
      <div>
        {step}
      </div>
    );
  }
}
