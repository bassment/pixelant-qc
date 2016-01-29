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
    activeType: PropTypes.string
  };
  static getStores() {
    return [SurveyStore];
  }
  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  setType = evt => SurveyActions.setType(evt.target.value);

  render() {
    return (
      <div>
        <Helmet title="Type"/>
        <section className={shared.section}>
          <h2>Which type of test do you prefer?</h2>
          <form>
            <RadioButton type="layout"
              active={this.props.activeType === 'layout'}
              onClick={this.setType}/>
            <RadioButton type="functional"
              active={this.props.activeType === 'functional'}
              onClick={this.setType}/>
            <RadioButton type="both"
              active={this.props.activeType === 'both'}
              onClick={this.setType}/>
          </form>
          <Link to="/survey/section">
            <button className={styles.submitButton}>Next</button>
          </Link>
        </section>
      </div>
    );
  }
}
