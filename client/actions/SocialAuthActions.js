import alt from '../alt/alt';
import Firebase from 'firebase';
import { browserHistory } from 'react-router';

class SocialAuthActions {
  login() {
    return (dispatch) => {
      this.firebaseRef = new Firebase('https://automat.firebaseio.com/users');
      this.firebaseRef.authWithOAuthPopup('google', (error, user) => {
        if (error) { return; }
        dispatch(user);
        browserHistory.push('/survey');
      });
    };
  }
}

export default alt.createActions(SocialAuthActions);
