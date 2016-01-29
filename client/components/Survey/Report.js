import shared from '../../css/shared.css';
import styles from '../../css/Survey.css';

import React from 'react';
import Helmet from 'react-helmet';

import SurveyStore from '../../stores/SurveyStore';
import SurveyActions from '../../actions/SurveyActions';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Report extends React.Component {
  static getStores() {
    return [SurveyStore];
  }
  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  testAgain = () => SurveyActions.testAgain();

  render() {
    return (
      <div>
        <Helmet title="Survey"/>
        <section className={shared.section}>
          <h1>You will recieve Test Reports shortly!</h1>
          <button
            className={styles.testButton}
            onClick={this.testAgain}>Test Again!</button>
        </section>
      </div>
    );
  }
}
