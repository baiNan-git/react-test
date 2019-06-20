const reducer = (state = {
  kindprolist: []
}, action) => {
  const { type, data} = action;
  switch (type) {
    case 'changeKindProlist':
      return Object.assign({}, state, { kindprolist: data});
    default:
      return state;
  }
}

export default reducer;