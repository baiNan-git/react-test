import { createStore } from 'redux';
const reducer = (state = {
  bannerlist:[],
  prolist:[]
}, action) => {
  const { type, data } = action
  switch(type){
    case 'changeBannerlist':
      state = {
        bannerlist: data,
        prolist: state.prolist
      }
      return state;
    case 'changeProlist':
      state = {
        bannerlist: state.bannerlist,
        prolist: data
      }
      return state;
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store