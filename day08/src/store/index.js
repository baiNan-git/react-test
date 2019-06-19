import { createStore, combineReducers } from 'redux';
import home from '@/views/home/store'
import kind from '@/views/kind/store'

const reducer = combineReducers({
  home,
  kind
})

const store = createStore(reducer);

export default store;