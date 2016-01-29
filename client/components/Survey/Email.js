import shared from '../../css/shared.css';
import styles from '../../css/Survey.css';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';

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

  sendSurveyData = () => {
    const email = ReactDOM.findDOMNode(this.refs.email).value;
    SurveyActions.sendSurveyData(email);
  };

  render() {
    return (
      <div>
        <Helmet title="Email"/>
        <section className={shared.section}>
          <h2>Please fill in your email below!</h2>
          <input style={{width: '300px', marginTop: '15px'}}
            type="text"
            placeholder="anton@pixelant.se"
            ref="email" />
          <button
            className={styles.testButton}
            onClick={this.sendSurveyData}>
            Test!
          </button>
        </section>
      </div>
    );
  }
}
