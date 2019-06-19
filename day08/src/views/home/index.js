import UI from './UI';
import { connect } from 'react-redux';
import api from '@/api';

const mapStateToProps = (state) => {
  return {
    bannerlist: state.home.bannerlist,
    prolist: state.home.prolist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getBannerListData () {
      api.requestGetData('banner').then(data => {
        dispatch({
          type: 'changeBannerlist',
          data
        })
      })
    },
    getProListData () {
      api.requestGetData('douban').then(data => {
        dispatch({
          type: 'changeProlist',
          data
        })
      })
    }
  }
}

const Com = connect(mapStateToProps,mapDispatchToProps)(UI)

export default Com;