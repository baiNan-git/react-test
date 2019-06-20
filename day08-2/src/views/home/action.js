import api from '@/api';
export default {
  getbannerlist (dispatch) {
    api.reqGetData('/banner').then(data => {
      dispatch({
        type: 'changeBannerlist',
        data
      })
    })
  },
  getprolist (dispatch) {
    api.reqGetData('/douban').then(data => {
      dispatch({
        type: 'changeProlist',
        data
      })
    })
  }
}