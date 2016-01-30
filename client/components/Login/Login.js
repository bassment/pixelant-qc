import shared from '../../css/shared.css';
import styles from '../../css/Login.css';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Helmet from 'react-helmet';

import UserActions from '../../actions/UserActions';
import SocialAuthActions from '../../actions/SocialAuthActions';

import UserStore from '../../stores/UserStore';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class Login extends React.Component {
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

  socialLogin = () => SocialAuthActions.login();

  signin = () => {
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    UserActions.signin(username, password);
  };

  signup = () => {
    const username = ReactDOM.findDOMNode(this.refs.username).value;
    const password = ReactDOM.findDOMNode(this.refs.password).value;
    UserActions.signup(username, password);
  };

  signout = () => UserActions.signout();

  render() {
    if (this.props.user) {
      return (
        <div>
          <section className={shared.section}>
            <p>Hi {this.props.user.username || this.props.user.google.displayName}!</p>
            <p><button className={styles.signOutButton} onClick={this.signout}>Sign Out</button></p>
          </section>
        </div>
      );
    }

    return (
      <div>
        <Helmet title="Login"/>
        <section className={shared.section}>
          <p><input type="text" placeholder="Username" ref="username" /></p>
          <p><input type="password" placeholder="Password" ref="password" /></p>
          {
            this.props.errorMessage ?
              <span className={styles.errorMessage}>
                {this.props.errorMessage}
              </span> :
                null
          }
          <p>
            <button className={styles.signButton} onClick={this.signin}>Sign In</button>
            <button className={styles.signButton} onClick={this.signup}>Sign Up</button>
            <button
              className={styles.googleButton}
              onClick={this.socialLogin}>Login with Google</button>
          </p>
        </section>
      </div>
    );
  }
}
