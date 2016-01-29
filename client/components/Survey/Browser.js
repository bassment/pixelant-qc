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
export default class Type extends React.Component {
  static propTypes = {
    activeBrowser: PropTypes.string
  };
  static getStores() {
    return [SurveyStore];
  }
  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  setBrowser = evt => SurveyActions.setBrowser(evt.target.value);

  render() {
    return (
      <div>
        <Helmet title="Browser"/>
        <section className={shared.section}>
          <h2>On which browsers I should run tests?</h2>
          <form>
            <RadioButton type="chrome"
              active={this.props.activeBrowser === 'chrome'}
              onClick={this.setBrowser}/>
            <RadioButton type="firefox"
              active={this.props.activeBrowser === 'firefox'}
              onClick={this.setBrowser}/>
            <RadioButton type="both"
              active={this.props.activeBrowser === 'both'}
              onClick={this.setBrowser}/>
          </form>
          <Link to="/survey/email">
            <button className={styles.submitButton}>Next</button>
          </Link>
        </section>
      </div>
    );
  }
}
