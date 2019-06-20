import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import home from '@/views/home/store';
import kind from '@/views/kind/store';
import detail from '@/views/detail/store';

const reducer = combineReducers({
  home,
  kind,
  detail
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;