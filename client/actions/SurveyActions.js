import alt from '../alt/alt';

class SurveyActions {
  constructor() {
    this.generateActions(
      'setActiveRadio',
      'sendSurveyData',
      'backOneStep'
    );
  }
}

export default alt.createActions(SurveyActions);
