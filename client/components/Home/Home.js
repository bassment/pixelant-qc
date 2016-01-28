import shared from '../../css/shared.css';

import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import Login from './Login';

import UserStore from '../../stores/UserStore';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Home extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    errorMessage: PropTypes.string
  };

  static getStores() {
    return [UserStore];
  }

  static getPropsFromStores() {
    return UserStore.getState();
  }

  render() {
    return (
      <div>
        <Helmet title="Automate"/>
          <section className={shared.section}>
            <Login user={this.props.user} error={this.props.errorMessage}/>
          </section>
      </div>
    );
  }
}
