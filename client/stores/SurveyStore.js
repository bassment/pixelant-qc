import alt from '../alt/alt';
import {postSurveyData} from '../utils/RestAPI';

import SurveyActions from '../actions/SurveyActions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class SurveyStore {
  constructor() {
    this.state = {
      activeRadioButton: null,
      activeStep: 'firstStep'
    };
  }

  @bind(SurveyActions.setActiveRadio)
  setActiveRadio(value) {
    this.setState({activeRadioButton: value});
  }

  @bind(SurveyActions.sendSurveyData)
  sendSurveyData(data) {
    postSurveyData(data);
    this.setState({activeStep: 'finalStep'});
  }

  @bind(SurveyActions.backOneStep)
  backOneStep() {
    this.setState({activeStep: 'firstStep'});
  }
}

export default alt.createStore(SurveyStore);
