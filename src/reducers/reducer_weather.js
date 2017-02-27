import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) { // initial state is empty array
  // redux-promise receives AJAX request, stops it, and resends the action with
  // resolved promise to reducers
  switch (action.type) {
    case FETCH_WEATHER:// state.concat to create a new state, since .push since it would modify existing state.
      return [action.payload.data, ...state]; // es6 syntax
  }
  return state;
}
