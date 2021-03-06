import React from 'react'; //必须引入，因为ReactDOM依赖于此
import ReactDOM from 'react-dom'; // 入口文件必须引入，因为需要渲染DOM节点的内容
import App from '@/components/App'; // 引入一个App.js的组件
import store from './store';

// 给页面中id为root的标签渲染了一个app的组件
// 在react中组件的首字母必须大写，因为如果写的是小写，第一可能与HTML标签冲突
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )

function renderFn () {
  ReactDOM.render(
    <App />,
    document.querySelector('#root')
  )
}
renderFn()

store.subscribe(renderFn)
