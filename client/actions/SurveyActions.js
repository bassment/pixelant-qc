import alt from '../alt/alt';

class SurveyActions {
  constructor() {
    this.generateActions(
      'setActiveRadio'
    );
  }
}

export default alt.createActions(SurveyActions);
