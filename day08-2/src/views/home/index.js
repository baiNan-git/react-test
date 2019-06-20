import { connect } from 'react-redux';
import UI from './UI';
// import api from '@/api';
import action from './action';

const mapStateToProps = (state) => ({
  bannerlist: state.home.bannerlist,
  prolist: state.home.prolist
})

const mapDispatchToProps = (dispatch) => ({
  getbannerlist () { dispatch(action.getbannerlist) },
  getprolist () { dispatch(action.getprolist) }
})

const Com = connect(mapStateToProps,mapDispatchToProps)(UI);

export default Com;