import alt from '../alt/alt';
import Firebase from 'firebase';
import { browserHistory } from '../main';

class SocialAuthActions {
  login() {
    return (dispatch) => {
      this.firebaseRef = new Firebase('https://automat.firebaseio.com/users');
      this.firebaseRef.authWithOAuthPopup('google', (error, user) => {
        if (error) { return; }
        dispatch(user);
        browserHistory.push('/');
      });
    };
  }
}

export default alt.createActions(SocialAuthActions);
