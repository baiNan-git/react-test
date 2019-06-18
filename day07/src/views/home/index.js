import { connect } from 'react-redux';
import UI from './UI';

const mapStateToProps = (state) => {  //state  所有store中的数据
  // console.log(state)
  return {
    bannerlist: state.bannerlist,
    prolist: state.prolist
  }
}
const mapDispatchToProps = (dispatch) => {  //dispatch 可以直接触发action
  // console.log(state)
  return {
    getBannerlist () {
      fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
        dispatch({ //直接触发action，不需要通过store.dispatch() 
          type: 'changeBannerList',
          data
        })
      })
    },
    getProlist () {
      fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
        dispatch({
          type: 'changeProList',
          data
        })
      })
    }
  }
}

// 从store中取数据并传值给UI组件，UI组件通过this.props获取数据
const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;