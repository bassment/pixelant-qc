import '../../css/globals.css';
import shared from '../../css/shared.css';
import styles from '../../css/Survey.css';

import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import Helmet from 'react-helmet';

import RadioButton from './RadioButton';

import SurveyStore from '../../stores/SurveyStore';
import SurveyActions from '../../actions/SurveyActions';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Page extends React.Component {
  static propTypes = {
    activeProject: PropTypes.string
  };
  static getStores() {
    return [SurveyStore];
  }
  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  setProject = evt => SurveyActions.setProject(evt.target.value);

  render() {
    return (
      <div>
        <Helmet title="Project"/>
        <section className={shared.section}>
          <h2>What project do you want to test?</h2>
          <form>
            <RadioButton type="t3kit"
              active={this.props.activeProject === 't3kit'}
              onClick={this.setProject}/>
          </form>
          <Link to="/survey/type">
            <button className={styles.submitButton}>Next</button>
          </Link>
        </section>
      </div>
    );
  }
}
