import alt from '../alt/alt';
import * as API from '../utils/RestAPI';
import { browserHistory } from '../main';

class UserActions {
  signin(username, password) {
    return (dispatch) => {
      API.signin(username, password).then(response => {
        dispatch(response);
        browserHistory.push('/');
      });
    };
  }

  signup(username, password) {
    return (dispatch) => {
      API.signup(username, password).then(response => {
        dispatch(response);
        browserHistory.push('/');
      });
    };
  }

  signout() {
    return (dispatch) => {
      API.signout().then(() => {
        dispatch();
        browserHistory.push('/login');
      });
    };
  }
}

export default alt.createActions(UserActions);
