
const reducer = (state = {
  kindlist: [4, 5, 6]
}, action) => {
  const { type, data} = action;
  switch (type) {
    case 'changeKindlist':
      return Object.assign({}, state, { kindlist: data} );
      // return getNewState( state, {bannerlist: data});
    default:
      return state;
  }
}

export default reducer;