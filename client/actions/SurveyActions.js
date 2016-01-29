import alt from '../alt/alt';

class SurveyActions {
  constructor() {
    this.generateActions(
      'setProject',
      'setType',
      'setSection',
      'setBrowser',
      'sendSurveyData',
      'testAgain'
    );
  }
}

export default alt.createActions(SurveyActions);
