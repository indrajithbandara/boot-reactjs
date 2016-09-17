import * as types from '../constants/ActionTypes';

const initialState = {
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
  case types.GET_USERS:
    return Object.assign([], state, {
      users: action.users
    });
  default:
    return state;
  }
}
