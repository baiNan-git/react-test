const reducer = (state = {
  detailprolist: []
}, action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeDetailprolist':
      return Object.assign({}, state, { detailprolist: data})
    default:
      return state
  }
}

export default reducer;