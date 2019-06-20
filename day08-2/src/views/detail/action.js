import api from '@/api';

export default {
  getDetailprolist (dispatch) {
    api.reqGetData('/douban').then(data => {
      dispatch({
        type: 'changeDetailprolist',
        data
      })
    })
  }
}