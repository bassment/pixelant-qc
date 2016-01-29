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
    activeSection: PropTypes.string
  };
  static getStores() {
    return [SurveyStore];
  }
  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  setSection = evt => SurveyActions.setSection(evt.target.value);

  render() {
    return (
      <div>
        <Helmet title="Section"/>
        <section className={shared.section}>
          <h2>Which Home page section do you want to test?</h2>
          <form>
            <RadioButton type="top header"
              active={this.props.activeSection === 'top header'}
              onClick={this.setSection}/>
            <RadioButton type="meta menu"
              active={this.props.activeSection === 'meta menu'}
              onClick={this.setSection}/>
          </form>
          <Link to="/survey/browser">
            <button className={styles.submitButton}>Next</button>
          </Link>
        </section>
      </div>
    );
  }
}
