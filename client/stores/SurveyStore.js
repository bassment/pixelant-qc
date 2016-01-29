import alt from '../alt/alt';
import {browserHistory} from 'react-router';
import {postSurveyData} from '../utils/RestAPI';

import SurveyActions from '../actions/SurveyActions';
import { decorate, bind } from 'alt-utils/lib/decorators';

@decorate(alt)
class SurveyStore {
  constructor() {
    this.state = {
      activeProject: 't3kit',
      activeType: 'both',
      activeSection: 'top header',
      activeBrowser: 'both',
      email: 'anton@pixelant.se'
    };
  }

  @bind(SurveyActions.setProject)
  setProject(value) {
    this.setState({activeProject: value});
  }

  @bind(SurveyActions.setType)
  setType(value) {
    this.setState({activeType: value});
  }

  @bind(SurveyActions.setSection)
  setSection(value) {
    this.setState({activeSection: value});
  }

  @bind(SurveyActions.setBrowser)
  setBrowser(value) {
    this.setState({activeBrowser: value});
  }

  @bind(SurveyActions.sendSurveyData)
  sendSurveyData(email) {
    const data = {
      email: email || this.state.email,
      project: this.state.activeProject,
      type: this.state.activeType,
      section: this.state.activeSection,
      browser: this.state.activeBrowser
    };

    postSurveyData(data);

    browserHistory.push('/survey/reports');
  }
}

export default alt.createStore(SurveyStore);
