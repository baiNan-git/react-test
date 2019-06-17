import React ,{ Component } from 'react';
import '@/main.scss';
import Home from '@/components/Home'

class Com extends Component {
  render () {
    return (
      <div className = 'container'>
        <Home />
        <footer className = 'footer'>尾部</footer>
      </div>
    )
  }
}

export default Com;