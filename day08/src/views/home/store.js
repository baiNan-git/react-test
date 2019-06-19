
const reducer = (state = {
  bannerlist: [1, 2, 3],
  prolist: []
}, action) => {
  const { type, data} = action;
  switch (type) {
    case 'changeBannerlist':
      return Object.assign({}, state, { bannerlist: data} );
      // return getNewState( state, {bannerlist: data});
    case 'changeProlist':
      return Object.assign({}, state, { prolist: data} );
    default:
      return state;
  }
}

export default reducer;