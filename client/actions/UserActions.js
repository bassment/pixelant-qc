import alt from '../alt/alt';
import * as API from '../utils/RestAPI';
import { browserHistory } from 'react-router';

class UserActions {
  signin(username, password) {
    return (dispatch) => {
      API.signin(username, password).then(response => {
        dispatch(response);
        browserHistory.push('/t3kit');
      });
    };
  }

  signup(username, password) {
    return (dispatch) => {
      API.signup(username, password).then(response => {
        dispatch(response);
        browserHistory.push('/t3kit');
      });
    };
  }

  signout() {
    return (dispatch) => {
      API.signout().then(() => {
        dispatch();
        browserHistory.push('/');
      });
    };
  }
}

export default alt.createActions(UserActions);
