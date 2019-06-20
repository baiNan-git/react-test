import React from 'react';
import Detail from '@/views/detail';
import { Switch, Route } from 'react-router-dom';

const Com = () => (
  <div className = 'container'>
    <Switch>
      <Route path = '/detail/:id' component = { Detail }/>
    </Switch>
  </div>
)

export default Com;
