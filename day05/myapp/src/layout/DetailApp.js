import React from 'react';
import Detail from '@/views/Detail';
import Order from '@/views/Order';
import { Switch, Route} from 'react-router-dom';

function DetailApp () {
  return (
    <Switch>
      <Route path = '/detail/order' component = { Order }/>
      <Route path = '/detail/:id' component = { Detail }/>
    </Switch>
  )
}


export default DetailApp;
