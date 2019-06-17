import React from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import '@/main.scss';
import Home from '@/views/Home.js';
import Kind from '@/views/Kind.js';
import Cart from '@/views/Cart.js';
import User from '@/views/User.js';

function Com () {
  return (
    <div className="container">
      <Switch>
        <Route path='/home' component={ Home }/>
        <Route path='/kind' component={ Kind }/>
        <Route path='/cart' component={ Cart }/>
        <Route path='/user' component={ User }/>
        <Redirect to='/home'/>
      </Switch>
      <footer className='footer'>
        <ul>
          <NavLink to='/home'>
            <span></span>
            <p>首页</p>
          </NavLink>
          <NavLink to='/kind'>
            <span></span>
            <p>分类</p>
          </NavLink>
          <NavLink to='/cart'>
            <span></span>
            <p>购物车</p>
          </NavLink>
          <NavLink to='/user'>
            <span></span>
            <p>个人中心</p>
          </NavLink>
        </ul>
      </footer>
    </div>
  );
}

export default Com;
