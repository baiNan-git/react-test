import { connect } from 'react-redux';
import UI from './UI';
import action from './action';

const mapStateToProps = (state) => ({
  detailprolist: state.detail.detailprolist
})

const mapDispatchToProps = (dispatch) =>  ({
  getDetailprolist () { dispatch(action.getDetailprolist) }
})


const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;