import shared from '../../css/shared.css';

import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';

import Survey from './Survey';
import SurveyStore from '../../stores/SurveyStore';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Page extends React.Component {
  static propTypes = {
    activeRadioButton: PropTypes.string
  };

  constructor(props) {
    super(props);
  }

  static getStores() {
    return [SurveyStore];
  }

  static getPropsFromStores() {
    return SurveyStore.getState();
  }

  render() {
    return (
      <div>
        <Helmet title="T3Kit"/>
          <section className={shared.section}>
            <Survey activeRadioButton={this.props.activeRadioButton}/>
          </section>
      </div>
    );
  }
}
