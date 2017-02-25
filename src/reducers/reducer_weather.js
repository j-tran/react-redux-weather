export default function (state = null, action) {
  // redux-promise receives AJAX request, stops it, and resends the action with
  // resolved promise to reducers
  console.log('(In Reducer) Action received', action);
  return state;
}
