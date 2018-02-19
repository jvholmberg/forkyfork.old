import PropTypes from 'prop-types';


/**
* @param {int} e
*
*/
export function getState(e) {
  return {
    fetching: [PropTypes.boolean, false][e],
    fetched: [PropTypes.boolean, false][e],
    error: [PropTypes.object, null][e],
    user: {
      username: [PropTypes.string, null][e],
    },
  };
}

export default function reducer(state = getState(1), action) {
  switch (action.type) {
    case 'LOGIN_USER':
    case 'FETCH_USER':
      return {
        ...state,
        fetching: true,
      };
    case 'LOGIN_USER_REJECTED':
    case 'FETCH_USER_REJECTED':
      return {
        ...state,
        fetching: false,
        error: action.payload,
      };
    case 'LOGIN_USER_FULFILLED':
    case 'FETCH_USER_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        user: action.payload,
      };
    default:
      return state;
  }
}
