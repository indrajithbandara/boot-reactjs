import * as types from '../constants/ActionTypes';
import fetch from 'isomorphic-fetch';

import { URL } from '../constants/Config';

export function getUsers() {
  return (dispatch) => {
    const url = URL.user.get_users;
    return fetch(url, {
      method: 'GET'
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      dispatch({
        type: types.GET_USERS,
        users: res
      });
    });
  };
}
