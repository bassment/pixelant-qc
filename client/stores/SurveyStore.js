import alt from '../alt/alt';
import SurveyActions from '../actions/SurveyActions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class SurveyStore {
  constructor() {
    this.state = {
      activeRadioButton: null
    };
  }

  @bind(SurveyActions.setActiveRadio)
  setActiveRadio(value) {
    this.setState({activeRadioButton: value});
  }
}

export default alt.createStore(SurveyStore);
