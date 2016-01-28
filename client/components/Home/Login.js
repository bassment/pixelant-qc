import styles from '../../css/Login.css';

import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import UserActions from '../../actions/UserActions';
import SocialAuthActions from '../../actions/SocialAuthActions';

export default class Login extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    error: PropTypes.string
  };

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
        <div className="row">
          <p>Hi {this.props.user.username || this.props.user.google.displayName}!</p>
          <p><button className={styles.signOutButton} onClick={this.signout}>Sign Out</button></p>
        </div>
      );
    }

    return (
      <div className="row">
        <p><input type="text" placeholder="Username" ref="username" /></p>
        <p><input type="password" placeholder="Password" ref="password" /></p>
        {this.props.error ?
        <span className={styles.errorMessage}>{this.props.error}</span> :
        null}
        <p>
          <button className={styles.signButton} onClick={this.signin}>Sign In</button>
          <button className={styles.signButton} onClick={this.signup}>Sign Up</button>
          <button
            className={styles.googleButton}
            onClick={this.socialLogin}>Login with Google</button>
        </p>
      </div>
    );
  }
}
