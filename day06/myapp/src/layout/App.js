import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import '@/main.scss';
import Home from '@/views/Home.js';
import Kind from '@/views/Kind.js';
import Discount from '@/views/Discount.js';
import User from '@/views/User.js';
import Ranking from '@/views/Ranking.js';

function Com () {
  return (
    <div className="container">
      <Switch>
        <Route path='/home' component={ Home }/>
        <Route path='/kind' component={ Kind }/>
        <Route path='/discount' component={ Discount }/>
        <Route path='/ranking' component={ Ranking }/>
        <Route path='/user' component={ User }/>
        <Redirect to='/home'/>
      </Switch>
      <footer className='footer'>
        <ul>
          <NavLink to='/home'>
            <span  className = 'iconfont icon-shangcheng'></span>
            <p>首页</p>
          </NavLink>
          <NavLink to='/discount'>
            <span className = 'iconfont icon-99'></span>
            <p>9.9包邮</p>
          </NavLink>
          <NavLink to='/ranking'>
            <span className = 'iconfont icon-top01'></span>
            <p>TOP榜</p>
          </NavLink>
          <NavLink to='/kind'>
            <span className = 'iconfont icon-kinds'></span>
            <p>分类</p>
          </NavLink>
          <NavLink to='/user'>
            <span className = 'iconfont icon-wode'></span>
            <p>个人中心</p>
          </NavLink>
        </ul>
      </footer>
    </div>
  );
}

export default Com;
